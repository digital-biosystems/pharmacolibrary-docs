<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;halofantrine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Halofantrine_Klein2012_reference&quot;,&quot;label&quot;:&quot;Klein_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# halofantrine

- **generic name:** halofantrine
- **ATC codes:** `P01BX01`
- **DrugBank:** [DB01218](https://go.drugbank.com/drugs/DB01218) · **PubChem:** [CID 37393](https://pubchem.ncbi.nlm.nih.gov/compound/37393)
- **molar mass:** 500.424 g/mol (C26H30Cl2F3NO) — DrugBank
- **groups:** approved, withdrawn

## About

Halofantrine is an antimalarial drug used to treat malaria caused by Plasmodium falciparum and Plasmodium vivax. It is no longer in general use, having been withdrawn, largely because of safety concerns about heart rhythm disturbances.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q947595](https://www.wikidata.org/wiki/Q947595) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| halofantrine | parent | 500.424 | C26H30Cl2F3NO | DrugBank | [37393](https://pubchem.ncbi.nlm.nih.gov/compound/37393) | Klein_2012 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:01 | 1:19 | 1/1/0 | 1/0/0 | 0/0/0 | 52,920/3,984 | ollama / glm-5.3-flash | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Klein_2012_reference](drugs/drug_halofantrine/Halofantrine_Klein2012_reference.md) | ▶ model + simulator | 2-compartment, oral | 4 | Klein K et al., Population pharmacokinetics of halofant…, The Journal of pharmacy and… (2012) | [10.1111/j.2042-7158.2012.01554.x](https://doi.org/10.1111/j.2042-7158.2012.01554.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Krishna_1993_reference](drugs/drug_halofantrine/Halofantrine_Krishna1993_reference.md) | — | 1-compartment (no model) | 0 | Krishna S et al., Pharmacokinetics, efficacy and toxicity…, British journal of clinical… (1993) | [10.1111/j.1365-2125.1993.tb00419.x](https://doi.org/10.1111/j.1365-2125.1993.tb00419.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Kinoshita_2010_QaTc](drugs/drug_halofantrine/pd_Kinoshita_2010_QaTc.md) | change in heart rate-corrected QaTc interval ← halofantrine · direct Emax (saturable) effect | — | Kinoshita A et al., Effects of anti-malarial drugs on the e…, Malaria journal (2010) | [10.1186/1475-2875-9-318](https://doi.org/10.1186/1475-2875-9-318) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=halofantrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` inhibitor, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALM1 (modulator), CALM2 (modulator), CALM3 (modulator), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Klein_2012.pdf` | Klein K et al., Population pharmacokinetics of halofant…, The Journal of pharmacy and… (2012) | popPK | 10 | [10.1111/j.2042-7158.2012.01554.x](https://doi.org/10.1111/j.2042-7158.2012.01554.x) | [23058047](https://pubmed.ncbi.nlm.nih.gov/23058047) | Population PK (two-compartment, NONMEM) of halofantrine with full numeric CL, V1, CLD, V2 estimates reported directly in the abstract. |

<sub>queue written 2026-10-07T07:00:00.327636+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kinoshita_2010 | irrelevant | 0 | 0 | In-vitro isolated guinea pig heart pharmacodynamics (QT prolongation EC50) study, not a PK study reporting halofantrine disposition parameters. |
| popPK | Philipps_1998 | irrelevant | 0 | 0 | In vitro parasite susceptibility study reporting EC50 values, not pharmacokinetic disposition parameters for halofantrine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:00 UTC</sub>
