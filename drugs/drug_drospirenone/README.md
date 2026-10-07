<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;drospirenone&quot;}]"></div>

# drospirenone

- **generic name:** drospirenone
- **ATC codes:** `G03AA12`, `G03AA18`, `G03AC10`, `G03FA17`
- **DrugBank:** [DB01395](https://go.drugbank.com/drugs/DB01395) · **PubChem:** [CID 68873](https://pubchem.ncbi.nlm.nih.gov/compound/68873)
- **molar mass:** 366.4932 g/mol (C24H30O3) — DrugBank
- **groups:** approved, investigational

## About

Drospirenone is a progestogen used in hormonal contraceptives, typically combined with an estrogen, and also in progestogen–estrogen combination products. It is an approved medicine and is widely used in combined oral contraceptives.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419646](https://www.wikidata.org/wiki/Q419646) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| drospirenone | parent | 366.493 | C24H30O3 | DrugBank | [68873](https://pubchem.ncbi.nlm.nih.gov/compound/68873) | Reif_2013 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:51 | 7:11 | 1/0/0 | 0/2/0 | 0/0/0 | 256,176/10,521 | einfracz / qwen3.8-27b | 13 | 2/8 | 12/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Reif_2013_reference](drugs/drug_drospirenone/Drospirenone_Reif2013_reference.md) | held back | 1-compartment, oral | 10 | Reif S et al., Characterisation of the pharmacokinetic…, The journal of family plann… (2013) | [10.1136/jfprhc-2012-100397](https://doi.org/10.1136/jfprhc-2012-100397) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Cagnacci_2026_Androgenic](drugs/drug_drospirenone/pd_Cagnacci_2026_Androgenic.md) | androgenic effects ← drospirenone · inhibition effect | — | Cagnacci A et al., Natural estrogens: the new reference in…, Expert opinion on pharmacot… (2026) | [10.1080/14656566.2026.2725109](https://doi.org/10.1080/14656566.2026.2725109) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Farris_2017_coagulation_cascade_factors](drugs/drug_drospirenone/pd_Farris_2017_coagulation_cascade_factors.md) | coagulation cascade factors ← drospirenone · model not identified | — | Farris M et al., Pharmacodynamics of combined estrogen-p…, Expert review of clinical p… (2017) | [10.1080/17512433.2017.1356718](https://doi.org/10.1080/17512433.2017.1356718) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Farris_2017_thromboembolic_events](drugs/drug_drospirenone/pd_Farris_2017_thromboembolic_events.md) | thromboembolic events ← drospirenone · model not identified | — | Farris M et al., Pharmacodynamics of combined estrogen-p…, Expert review of clinical p… (2017) | [10.1080/17512433.2017.1356718](https://doi.org/10.1080/17512433.2017.1356718) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=drospirenone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | prostate gland | `AR` target | DrugBank actor |

<sub>Actors without a tissue in the table: NR3C1 (binder), NR3C2 (target), PGR (target), PON1 (substrate), PTGS2 (inducer), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 96 matched, 65 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sutter_2014.pdf` | Sutter G et al., Population pharmacokinetic/pharmacodyna…, Menopause (New York, N.Y.) (2014) | popPK | 10 | [10.1097/GME.0b013e31829c12e8](https://doi.org/10.1097/GME.0b013e31829c12e8) | [23963309](https://pubmed.ncbi.nlm.nih.gov/23963309) | The study describes a population PK model for drospirenone (linear open two-compartment model) in humans, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence text. |

<sub>queue written 2026-10-07T08:48:48.392981+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study is a pharmacodynamic model-based meta-analysis of breakthrough bleeding side effects, not a pharmacokinetic study, and does not report quantitative PK parameters for drospirenone. |
| PGx | Chun_2025 | not_relevant | 0 | 0 | The paper establishes a general PK/PD framework for drospirenone involving drug-drug interactions (CYP3A4 induction) and BMI, but does not report pharmacogenomic effects based on gene variants or genotypes. |
| PGx | Cicali_2022 | not_relevant | 0 | 0 | The paper discusses CYP3A4-mediated drug-drug interactions involving inducers/inhibitors (rifampicin), not pharmacogenomic effects (genetic variants). |
| popPK | Dogra_2024 | irrelevant | 0 | 0 | no_text gate: extracted text is mostly non-alphabetic (garbled or binary) |
| PGx | Helmer_2022 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ziritaxestat) rather than a gene variant or genotype effect. |
| popPK | Jensen_2023 | irrelevant | 1 | 0 | This is an analytical method validation paper for measuring drug concentrations to check protocol compliance, not a pharmacokinetic study reporting disposition parameters for drospirenone. |
| PGx | Liang_2025 | not_relevant | 0 | 0 | The study investigates the effects of combined oral contraceptives on PON1 enzyme activity and lipid metabolism, not the PK/PD of the drug drospirenone. |
| popPK | Marqueño_2019 | irrelevant | 0 | 0 | The paper is an in vitro toxicology/lipidomics study on fish cells, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Piscitelli_2012 | not_relevant | 0 | 0 | The paper evaluates drug-drug interactions of GSK2248761 and does not investigate any pharmacogenomic effects on drospirenone. |
| PGx | Richter_2020 | not_relevant | 0 | 0 | The paper studies drug-drug interactions (drospirenone and ethinyl estradiol) and formulation differences, but does not report pharmacogenomic effects or gene variants. |
| popPK | Sutter_2014 | relevant | 10 | 3 | The study describes a population PK model for drospirenone (linear open two-compartment model) in humans, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence text. |
| PGx | Venter_2021 | not_relevant | 0 | 0 | The paper investigates the effect of drospirenone/EE use on general health status and biotransformation enzyme activity, but does not report a pharmacogenomic effect on a PK or PD parameter of drospirenone. |
| PGx | Wiesinger_2015 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (ketoconazole) affecting drospirenone PK, not a pharmacogenomic effect based on genetic variants. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:48 UTC</sub>
