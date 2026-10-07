<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;pomalidomide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pomalidomide_Fau2020_reference&quot;,&quot;label&quot;:&quot;Fau_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pomalidomide/Pomalidomide_Fau2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pomalidomide_Ogasawara2021_reference&quot;,&quot;label&quot;:&quot;Ogasawara_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pomalidomide/Pomalidomide_Ogasawara2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pomalidomide_Papathanasiou2025_reference&quot;,&quot;label&quot;:&quot;Papathanasiou_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pomalidomide/Pomalidomide_Papathanasiou2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pomalidomide

- **generic name:** pomalidomide
- **ATC codes:** `L04AX06`
- **DrugBank:** [DB08910](https://go.drugbank.com/drugs/DB08910) · **PubChem:** [CID 134780](https://pubchem.ncbi.nlm.nih.gov/compound/134780)
- **molar mass:** 273.2441 g/mol (C13H11N3O4) — DrugBank
- **groups:** approved, investigational

## About

Pomalidomide is an immunomodulating and anti-angiogenic medicine used to treat multiple myeloma, and has also been studied for conditions such as amyloidosis, myelofibrosis, and plasma cell leukemia. It is approved and authorised in the European Union, where several pomalidomide products are on the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7227206](https://www.wikidata.org/wiki/Q7227206) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pomalidomide | parent | 273.244 | C13H11N3O4 | DrugBank | [134780](https://pubchem.ncbi.nlm.nih.gov/compound/134780) | Li_2015, Li_2017, Ogasawara_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:15 | 3:32 | 3/1/1 | 2/0/0 | 0/0/0 | 379,364/19,765 | einfracz / qwen3.8-27b | 12 | 1/11 | 11/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Fau_2020_reference](drugs/drug_pomalidomide/Pomalidomide_Fau2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Fau JB et al., Drug-Disease Interaction and Time-Depen…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12561](https://doi.org/10.1002/psp4.12561) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ogasawara_2021_reference](drugs/drug_pomalidomide/Pomalidomide_Ogasawara2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Ogasawara K et al., Recurrent or progressive pediatric brai…, Pediatric research (2021) | [10.1038/s41390-020-01304-6](https://doi.org/10.1038/s41390-020-01304-6) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Papathanasiou_2025_reference](drugs/drug_pomalidomide/Pomalidomide_Papathanasiou2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Papathanasiou T et al., Population Pharmacokinetics for Belanta…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01508-1](https://doi.org/10.1007/s40262-025-01508-1) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q31 — no SI value to build from</sub><br><sub>blocking: C2_base_Q69 failed (ratio 3.6634)</sub><br><sub>route_to: `human_review`</sub> | [Li_2015_reference](drugs/drug_pomalidomide/Pomalidomide_Li2015_reference.md) | — | 1-compartment (no model) | 7 (+2 cov.) | Li Y et al., Population pharmacokinetics of pomalido…, Journal of clinical pharmac… (2015) | [10.1002/jcph.455](https://doi.org/10.1002/jcph.455) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Li_2017_reference](drugs/drug_pomalidomide/Pomalidomide_Li2017_reference.md) | — | 1-compartment (no model) | 8 | Li Y et al., Population pharmacokinetics of pomalido…, Clinical pharmacology : adv… (2017) | [10.2147/CPAA.S144606](https://doi.org/10.2147/CPAA.S144606) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Koiwai_2021_M_protein](drugs/drug_pomalidomide/pd_Koiwai_2021_M_protein.md) | serum M-protein ← pomalidomide · disease-progression model | model (no simulator) | Koiwai K et al., PK/PD modeling analysis for dosing regi…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12666](https://doi.org/10.1002/psp4.12666) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Pitoy_2024_MPROT](drugs/drug_pomalidomide/pd_Pitoy_2024_MPROT.md) | serum M-protein ← Pomalidomide · disease-progression model | — | Pitoy A et al., Isatuximab-dexamethasone-pomalidomide c…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13206](https://doi.org/10.1002/psp4.13206) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pomalidomide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CRBN (inhibitor), PTGS2 (inhibitor), TNF (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 5  ·  extracted 3  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2014.pdf` | Li Y et al., Modeling and simulation to probe the ph…, The Journal of pharmacology… (2014) | popPK | 10 | [10.1124/jpet.114.215251](https://doi.org/10.1124/jpet.114.215251) | [24833703](https://pubmed.ncbi.nlm.nih.gov/24833703) | The paper reports a population PK model for pomalidomide in humans and monkeys, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-07T00:12:23.283298+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brillac_2025 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for isatuximab (a monoclonal antibody), while pomalidomide is mentioned only as a comparator or co-administered agent in the context of multiple myeloma treatment. |
| popPK | Deng_2021 | irrelevant | 0 | 0 | The study focuses on the mechanism of action for thalidomide in neuropathic pain, using pomalidomide only as a comparator compound with no pharmacokinetic parameters reported. |
| popPK | Dosne_2023 | irrelevant | 0 | 0 | The study reports population PK parameters exclusively for daratumumab, while pomalidomide is only a co-administered comparator drug without any disposition parameters reported. |
| popPK | Fau_2020 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of isatuximab, a monoclonal antibody, while pomalidomide is only mentioned as a co-administered agent in the regimen. |
| popPK | Hanafin_2025 | irrelevant | 0 | 0 | The paper is an exposure-response analysis for belantamab mafodotin, where pomalidomide is merely a co-administered comparator drug, and no PK parameters for pomalidomide are reported. |
| popPK | Ide_2022 | irrelevant | 0 | 0 | The study analyzes the population pharmacokinetics of elotuzumab (a monoclonal antibody), not pomalidomide, which is only a co-administered drug. |
| popPK | Koiwai_2021 | irrelevant | 2 | 0 | Pomalidomide is only a co-administered comparator in an isatuximab study, and its PK values are explicitly stated to be extracted from a separate reference (Li et al.) rather than provided in this paper's evidence. |
| popPK | Li_2014 | relevant | 10 | 2 | The paper reports a population PK model for pomalidomide in humans and monkeys, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Papathanasiou_2025 | irrelevant | 0 | 0 | The study characterizes the population pharmacokinetics of belantamab mafodotin and its metabolite cys-mcMMAF, with pomalidomide listed only as a comparator agent in a different trial arm without any reported PK parameters for it. |
| popPK | Pitoy_2024 | irrelevant | 0 | 0 | The study models serum M-protein kinetics and PFS, using pomalidomide only as a covariate/drug effect with a fixed elimination rate constant (0.15 h-1) rather than estimating its pharmacokinetic parameters. |
| popPK | Rachedi_2022 | irrelevant | 0 | 0 | The study focuses on exposure-response analysis for isatuximab, with pomalidomide serving only as a co-administered comparator/control agent without any reported PK parameters for pomalidomide itself. |
| popPK | Takwale_2022 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study on novel GSPT1 degraders, not a pharmacokinetic study of pomalidomide. |
| popPK | Xu_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of daratumumab; pomalidomide is only mentioned as a co-administered combination therapy agent and no PK parameters for pomalidomide are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:12 UTC</sub>
