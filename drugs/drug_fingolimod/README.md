<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;fingolimod&quot;}]"></div>

# fingolimod

- **generic name:** fingolimod
- **ATC codes:** `L04AA27`, `L04AE01`
- **DrugBank:** [DB08868](https://go.drugbank.com/drugs/DB08868) · **PubChem:** [CID 107970](https://pubchem.ncbi.nlm.nih.gov/compound/107970)
- **molar mass:** 307.4708 g/mol (C19H33NO2) — DrugBank
- **groups:** approved, investigational

## About

Fingolimod is an immunosuppressant used to treat multiple sclerosis, including relapsing-remitting forms. It is authorised in the European Union and widely used as a treatment for multiple sclerosis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425137](https://www.wikidata.org/wiki/Q425137) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:11 | 0:36 | 0/0/0 | 0/1/0 | 0/0/0 | 43,259/1,419 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_2013_peripheral_lymphocyte_counts_at_SS](drugs/drug_fingolimod/pd_Lee_2013_peripheral_lymphocyte_counts_at_SS.md) | peripheral lymphocyte counts at SS ← fingolimod phosphate · direct sigmoid Emax (Hill) effect | — | Lee JY et al., Use of a biomarker in exposure-response…, CPT: pharmacometrics & syst… (2013) | [10.1038/psp.2013.44](https://doi.org/10.1038/psp.2013.44) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fingolimod).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inducer/inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inducer/inhibitor | DrugBank actor |
| metabolism | kidney | `CYP4F2` inducer/substrate | DrugBank actor |
| metabolism | liver | `CYP2E1` substrate, `CYP4F2` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DRD3 (target), HDAC1 (inhibitor), S1PR1 (modulator), S1PR3 (modulator), S1PR4 (modulator), S1PR5 (modulator), SLC1A2 (inducer), SLC1A3 (inducer), SPHK1 (inhibitor), SPHK1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wu_2012.pdf` | Wu K et al., Population pharmacokinetics of fingolim…, Journal of clinical pharmac… (2012) | popPK | 9 | [10.1177/0091270011409229](https://doi.org/10.1177/0091270011409229) | [22110161](https://pubmed.ncbi.nlm.nih.gov/22110161) | The study describes a population PK model for fingolimod phosphate, but specific numeric parameter values are not present in the provided text. |
| `Papakyriakopoulou_2024.pdf` | Papakyriakopoulou P et al., Pharmacokinetic Study of Fingolimod Nas…, Pharmaceutical research (2024) | popPK | 7 | [10.1007/s11095-024-03745-8](https://doi.org/10.1007/s11095-024-03745-8) | [39470941](https://pubmed.ncbi.nlm.nih.gov/39470941) | The study reports non-compartmental pharmacokinetic parameters (Cmax, bioavailability) for fingolimod in mice, but does not report compartmental parameters like clearance, volume of distribution, or half-life derived from a model. |

<sub>queue written 2026-10-14T22:11:21.460890+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bakker_2026 | irrelevant | 0 | 0 | The study evaluates TRV045, not fingolimod, which is only mentioned as a comparator in the background. |
| popPK | David_2012 | irrelevant | 2 | 0 | The paper is a qualitative review describing general pharmacokinetic properties (e.g., bioavailability, half-life) without reporting specific quantitative compartmental parameters (CL, V, Q, ka) or population model estimates. |
| popPK | Hersh_2024 | irrelevant | 0 | 0 | The study investigates heterogeneous treatment effects on brain atrophy using MRI and does not report any pharmacokinetic parameters for fingolimod. |
| popPK | Jin_2014 | irrelevant | 0 | 0 | Fingolimod is used only as a comparator to the subject drug Syl948, and no quantitative PK parameters for fingolimod are reported. |
| popPK | Lee_2013 | irrelevant | 2 | 1 | The paper is an exposure-response (PK/PD) analysis using fingolimod phosphate concentrations as exposure but does not report compartmental PK parameters (CL, V, ka) or numeric exposure values in the provided text. |
| popPK | Maceski_2025 | irrelevant | 0 | 0 | The study focuses on biomarker prediction (sGFAP/sNfL) and clinical outcomes, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for fingolimod. |
| popPK | OSullivan_2015 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro/ex-vivo paper on neuroprotection, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for fingolimod. |
| popPK | Papakyriakopoulou_2024 | relevant | 7 | 4 | The study reports non-compartmental pharmacokinetic parameters (Cmax, bioavailability) for fingolimod in mice, but does not report compartmental parameters like clearance, volume of distribution, or half-life derived from a model. |
| popPK | Pitzalis_2021 | irrelevant | 0 | 0 | The paper investigates the effect of fingolimod on the humoral immune response to a vaccine, not the pharmacokinetic disposition parameters of the drug itself. |
| popPK | Rauma_2020 | irrelevant | 0 | 0 | The study focuses on lipid profile alterations and safety outcomes, not pharmacokinetic parameters. |
| popPK | Rüger_2014 | irrelevant | 0 | 0 | The paper describes immunological signaling and cellular assays (mechanistic) rather than pharmacokinetic parameters or disposition models. |
| popPK | Taylor_2012 | irrelevant | 4 | 0 | The study uses fingolimod as a reference/comparator in a preclinical rat model to screen novel analogs, and no quantitative PK parameter values are provided in the evidence. |
| popPK | Valentine_2010 | irrelevant | 0 | 0 | The study characterizes pharmacological analogues of fingolimod (FTY720-vinylphosphonate) rather than reporting quantitative pharmacokinetic parameters for fingolimod itself. |
| popPK | Wu_2012 | relevant | 9 | 2 | The study describes a population PK model for fingolimod phosphate, but specific numeric parameter values are not present in the provided text. |
| popPK | You_2021 | irrelevant | 0 | 0 | The study assesses the neuroprotective effects of disease-modifying therapies on retinal ganglion cell loss using optical coherence tomography and does not report any pharmacokinetic parameters for fingolimod. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
