<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H02A&quot;,&quot;href&quot;:&quot;atc/H02A.md&quot;},{&quot;label&quot;:&quot;fludrocortisone&quot;}]"></div>

# fludrocortisone

- **generic name:** fludrocortisone
- **ATC codes:** `H02AA02`, `S01CA06`, `S02CA07`, `S03CA05`
- **DrugBank:** [DB00687](https://go.drugbank.com/drugs/DB00687) · **PubChem:** [CID 31378](https://pubchem.ncbi.nlm.nih.gov/compound/31378)
- **molar mass:** 380.4504 g/mol (C21H29FO5) — DrugBank
- **groups:** approved, investigational

## About

Fludrocortisone is a mineralocorticoid corticosteroid used to treat conditions such as Addison's disease, adrenal insufficiency, and postural hypotension. It is an approved medicine and appears on the WHO essential medicines list, so it is used widely in human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2697578](https://www.wikidata.org/wiki/Q2697578) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fludrocortisone | parent | 380.45 | C21H29FO5 | DrugBank | [31378](https://pubchem.ncbi.nlm.nih.gov/compound/31378) | Hamitouche_2017, Polito_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:33 | 1:02 | 0/1/1 | 1/0/1 | 0/0/0 | 46,534/3,259 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Polito_2016_reference](drugs/drug_fludrocortisone/Fludrocortisone_Polito2016_reference.md) | — | 1-compartment (no model) | 5 | Polito A et al., Pharmacokinetics of oral fludrocortison…, British journal of clinical… (2016) | [10.1111/bcp.13065](https://doi.org/10.1111/bcp.13065) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hamitouche_2017_reference](drugs/drug_fludrocortisone/Fludrocortisone_Hamitouche2017_reference.md) | — | general linear (no model) | 2 | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Christ_1993_IP3](drugs/drug_fludrocortisone/pd_Christ_1993_IP3.md) | IP3 ← fludrocortisone · direct Emax (saturable) effect | — | Christ M et al., The inositol-1,4,5-trisphosphate system…, The Journal of clinical end… (1993) | [10.1210/jcem.77.6.8263127](https://doi.org/10.1210/jcem.77.6.8263127) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hamitouche_2017_urinary_sodium_potassium_ratio](drugs/drug_fludrocortisone/pd_Hamitouche_2017_urinary_sodium_potassium_ratio.md) | urinary sodium/potassium ratio ← fludrocortisone · indirect response — drug inhibits the production of urinary sodium/potassium ratio | — | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fludrocortisone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | prostate gland | `AR` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HSD11B1 (substrate), HSD11B2 (substrate), NR3C1 (target), NR3C2 (target), SERPINA6 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hamitouche_2017.pdf` | Hamitouche N et al., Population Pharmacokinetic-Pharmacodyna…, The AAPS journal (2017) | popPK | 10 | [10.1208/s12248-016-0041-9](https://doi.org/10.1208/s12248-016-0041-9) | [28083797](https://pubmed.ncbi.nlm.nih.gov/28083797) | The study provides a population pharmacokinetic model for fludrocortisone in humans, with key numeric parameters like clearance and half-life explicitly stated in the abstract. |
| `Polito_2016.pdf` | Polito A et al., Pharmacokinetics of oral fludrocortison…, British journal of clinical… (2016) | popPK | 10 | [10.1111/bcp.13065](https://doi.org/10.1111/bcp.13065) | [27416887](https://pubmed.ncbi.nlm.nih.gov/27416887) | The paper reports a population pharmacokinetic model for fludrocortisone with specific numeric values for clearance, volume of distribution, half-life, and absorption lag time directly in the abstract. |

<sub>queue written 2026-10-07T09:32:49.573550+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Christ_1993 | irrelevant | 0 | 0 | The study investigates in vitro signaling mechanisms (IP3 generation) of steroids in human mononuclear leukocytes and does not report pharmacokinetic parameters (CL, V, t1/2) for fludrocortisone. |
| popPK | Hadoke_2001 | irrelevant | 0 | 0 | Fludrocortisone is used only as a comparator agent in a functional vascular physiology study in mice; no pharmacokinetic parameters (CL, V, etc.) are reported. |
| popPK | Kamrath_2019 | irrelevant | 0 | 0 | The study focuses on urinary steroid metabolomics for monitoring growth in CAH patients and does not report pharmacokinetic parameters for fludrocortisone. |
| popPK | Nakada_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of beta-adrenergic receptor regulation in 3T3-L1 cells where fludrocortisone is used only as a comparative ligand for receptor affinity, not for pharmacokinetic analysis. |
| popPK | Wehling_1995 | irrelevant | 0 | 0 | The paper investigates nongenomic mechanisms of mineralocorticoids on intracellular calcium, not pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:33 UTC</sub>
