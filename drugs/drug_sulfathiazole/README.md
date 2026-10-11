<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;sulfathiazole&quot;}]"></div>

# sulfathiazole

- **generic name:** sulfathiazole
- **ATC codes:** `D06BA02`, `J01EB07`
- **DrugBank:** [DB06147](https://go.drugbank.com/drugs/DB06147) · **PubChem:** [CID 5340](https://pubchem.ncbi.nlm.nih.gov/compound/5340)
- **molar mass:** 255.317 g/mol (C9H9N3O2S2) — DrugBank
- **groups:** approved, vet_approved, withdrawn

## About

Sulfathiazole is a sulfonamide anti-infective that was used against bacterial infections, including topical treatment of skin infections and vaginitis. It has been withdrawn from human use, largely because of toxicity concerns, though it remains approved for veterinary purposes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408427](https://www.wikidata.org/wiki/Q408427) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sulfathiazole | parent | 255.317 | C9H9N3O2S2 | DrugBank | [5340](https://pubchem.ncbi.nlm.nih.gov/compound/5340) | Bevill_1977, Vitková_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:59 | 0:54 | 0/2/1 | 1/0/0 | 0/0/0 | 41,237/2,368 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Bevill_1977_reference](drugs/drug_sulfathiazole/Sulfathiazole_Bevill1977_reference.md) | — | 1-compartment (no model) | 2 | Bevill RF et al., Disposition of sulfonamides in food-pro…, Journal of pharmaceutical s… (1977) | [10.1002/jps.2600660923](https://doi.org/10.1002/jps.2600660923) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [VAN_1994_reference](drugs/drug_sulfathiazole/Sulfathiazole_VAN1994_reference.md) | — | 1-compartment (no model) | 0 | VAN Poucke LSG et al., Pharmacokinetics and Tissue Residues of…, Journal of food protection (1994) | [10.4315/0362-028X-57.9.796](https://doi.org/10.4315/0362-028X-57.9.796) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Vitková_2021_reference](drugs/drug_sulfathiazole/Sulfathiazole_Vitkov2021_reference.md) | — | 1-compartment (no model) | 1 | Vitková Z et al., In-Vivo Analysis and Model-Based Predic…, Molecules (Basel, Switzerla… (2021) | [10.3390/molecules26185602](https://doi.org/10.3390/molecules26185602) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Baran_2006_growth](drugs/drug_sulfathiazole/pd_Baran_2006_growth.md) | growth ← sulfathiazole · inhibition effect | — | Baran W et al., Toxicity and biodegradability of sulfon…, Chemosphere (2006) | [10.1016/j.chemosphere.2006.04.040](https://doi.org/10.1016/j.chemosphere.2006.04.040) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sulfathiazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| — | adipose tissue | `CYP19A1` inducer | DrugBank actor |
| — | ovary | `CYP19A1` inducer | DrugBank actor |
| — | testis | `CYP19A1` inducer | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bevill_1977.pdf` | Bevill RF et al., Disposition of sulfonamides in food-pro…, Journal of pharmaceutical s… (1977) | popPK | 10 | [10.1002/jps.2600660923](https://doi.org/10.1002/jps.2600660923) | [903868](https://pubmed.ncbi.nlm.nih.gov/903868) | The paper explicitly reports quantitative disposition parameters (elimination half-life and volume of distribution) for sulfathiazole in sheep. |
| `VAN_1994.pdf` | VAN Poucke LSG et al., Pharmacokinetics and Tissue Residues of…, Journal of food protection (1994) | popPK | 10 | [10.4315/0362-028X-57.9.796](https://doi.org/10.4315/0362-028X-57.9.796) | [31121795](https://pubmed.ncbi.nlm.nih.gov/31121795) | The paper reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-lives, bioavailability) for sulfathiazole in pigs based on a two-compartment model. |
| `Jain_1995.pdf` | Jain SK et al., Deposition kinetics, metabolism and uri…, DTW. Deutsche tierarztliche… (1995) | popPK | 8 | not captured | [8591739](https://pubmed.ncbi.nlm.nih.gov/8591739) | The study investigates the pharmacokinetics of sulfathiazole in sheep using a two-compartment model, but the evidence provided is an abstract that describes the findings qualitatively without listing specific numeric parameter values. |
| `Koritz_1977.pdf` | Koritz GD et al., Disposition of sulfonamides in food-pro…, American journal of veterin… (1977) | popPK | 8 | not captured | [883726](https://pubmed.ncbi.nlm.nih.gov/883726) | The abstract reports the study's focus on sulfathiazole PK in sheep and provides specific numeric values for half-life (1.3 h) and bioavailability (73%), but lacks the full set of disposition parameters (CL, V, ka) typically found in the results or tables of the full paper. |

<sub>queue written 2026-10-07T21:59:13.091923+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baran_2006 | irrelevant | 0 | 0 | The paper investigates photocatalytic degradation and toxicity of sulfathiazole in aquatic systems, not its pharmacokinetics in a biological host. |
| popPK | Bartlett_2013 | irrelevant | 0 | 0 | The study assesses the toxicity of sulfathiazole to freshwater amphipods, reporting LC50/EC50 values, but contains no pharmacokinetic parameters (clearance, volume, etc.). |
| popPK | Jain_1995 | relevant | 8 | 0 | The study investigates the pharmacokinetics of sulfathiazole in sheep using a two-compartment model, but the evidence provided is an abstract that describes the findings qualitatively without listing specific numeric parameter values. |
| popPK | Koritz_1977 | relevant | 8 | 3 | The abstract reports the study's focus on sulfathiazole PK in sheep and provides specific numeric values for half-life (1.3 h) and bioavailability (73%), but lacks the full set of disposition parameters (CL, V, ka) typically found in the results or tables of the full paper. |
| popPK | Shen_2013 | irrelevant | 0 | 0 | The paper studies the effect of sulfathiazole as an antibiotic/inhibitor on ammonia-oxidizing microbes, not its pharmacokinetics. |
| popPK | Wammer_2006 | irrelevant | 0 | 0 | The study is an environmental photochemistry/antibacterial activity analysis, not a pharmacokinetic study, and reports EC50 values rather than PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:59 UTC</sub>
