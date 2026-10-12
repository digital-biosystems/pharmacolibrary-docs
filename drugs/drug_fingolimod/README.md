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
| 2026-10-07 00:04 | 0:44 | 0/0/0 | 0/1/0 | 0/0/0 | 54,967/2,543 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Lee_2013_peripheral_lymphocyte_counts_at_SS](drugs/drug_fingolimod/pd_Lee_2013_peripheral_lymphocyte_counts_at_SS.md) | peripheral lymphocyte counts at SS ← fingolimod phosphate · direct sigmoid Emax (Hill) effect | — | Lee JY et al., Use of a biomarker in exposure-response…, CPT: pharmacometrics & syst… (2013) | [10.1038/psp.2013.44](https://doi.org/10.1038/psp.2013.44) |

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

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Papakyriakopoulou_2024.pdf` | Papakyriakopoulou P et al., Pharmacokinetic Study of Fingolimod Nas…, Pharmaceutical research (2024) | popPK | 9 | [10.1007/s11095-024-03745-8](https://doi.org/10.1007/s11095-024-03745-8) | [39470941](https://pubmed.ncbi.nlm.nih.gov/39470941) | The study reports quantitative non-compartmental PK parameters (Cmax, bioavailability) for fingolimod in mice, but compartmental parameters like CL, V, and ka are not explicitly listed in the text. |
| `Wu_2012.pdf` | Wu K et al., Population pharmacokinetics of fingolim…, Journal of clinical pharmac… (2012) | popPK | 9 | [10.1177/0091270011409229](https://doi.org/10.1177/0091270011409229) | [22110161](https://pubmed.ncbi.nlm.nih.gov/22110161) | The paper describes a population PK model for fingolimod phosphate, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Taylor_2012.pdf` | Taylor S et al., The utility of pharmacokinetic-pharmaco…, Xenobiotica; the fate of fo… (2012) | popPK | 5 | [10.3109/00498254.2011.645908](https://doi.org/10.3109/00498254.2011.645908) | [22225501](https://pubmed.ncbi.nlm.nih.gov/22225501) | The paper describes a PK-PD modeling approach in rats for S1P(1) agonists but provides no quantitative fingolimod PK parameter values in the evidence. |

<sub>queue written 2026-10-07T00:03:51.338617+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bakker_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of TRV045, not fingolimod, which is only mentioned as a comparator/context for S1P modulation. |
| popPK | David_2012 | irrelevant | 2 | 1 | The paper is a narrative review summarizing general PK properties (bioavailability, half-life) but does not report specific quantitative population PK parameter estimates (CL, V, Q) required for extraction. |
| popPK | Hersh_2024 | irrelevant | 0 | 0 | The study focuses on brain atrophy outcomes in multiple sclerosis using MRI and does not report pharmacokinetic parameters for fingolimod. |
| popPK | Jin_2014 | irrelevant | 0 | 0 | The paper studies the S1P1 agonist Syl948, using fingolimod only as a comparative reference agent without reporting fingolimod PK parameters. |
| popPK | Lee_2013 | irrelevant | 3 | 1 | This is a pharmacodynamic exposure-response analysis using fingolimod phosphate concentrations to predict clinical endpoints (relapse rate) and biomarker response (lymphocyte counts), but it does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for fingolimod. |
| popPK | Maceski_2025 | irrelevant | 0 | 0 | The paper investigates serum biomarkers (GFAP and NfL) as predictors of disease progression in MS patients treated with fingolimod, but does not report any pharmacokinetic parameters (CL, V, ka, etc.) for fingolimod. |
| popPK | OSullivan_2015 | irrelevant | 0 | 0 | The study focuses on the mechanism of action and protective effects of fingolimod against psychosine-induced injury in cells and tissues, not on pharmacokinetic disposition parameters. |
| popPK | Papakyriakopoulou_2024 | relevant | 9 | 3 | The study reports quantitative non-compartmental PK parameters (Cmax, bioavailability) for fingolimod in mice, but compartmental parameters like CL, V, and ka are not explicitly listed in the text. |
| popPK | Pitzalis_2021 | irrelevant | 0 | 0 | The study investigates the effect of fingolimod on the humoral immune response to a vaccine, not pharmacokinetic parameters. |
| popPK | Rauma_2020 | irrelevant | 0 | 0 | The study reports lipid profile changes (pharmacodynamics/adverse effects) rather than pharmacokinetic parameters like clearance or volume for fingolimod. |
| popPK | Rüger_2014 | irrelevant | 0 | 0 | The paper investigates the immunomodulatory effects and signaling pathways of fingolimod in immune cells (in vitro/mechanistic), not its pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Taylor_2012 | irrelevant | 5 | 0 | The paper describes a PK-PD modeling approach in rats for S1P(1) agonists but provides no quantitative fingolimod PK parameter values in the evidence. |
| popPK | Valentine_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization and mechanism of action of FTY720 analogues, reporting receptor binding affinities (EC50, Ki) rather than population pharmacokinetic parameters for fingolimod. |
| popPK | Wu_2012 | relevant | 9 | 0 | The paper describes a population PK model for fingolimod phosphate, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | You_2021 | irrelevant | 0 | 0 | The paper is a neuro-ophthalmology study analyzing retinal nerve fiber layer loss in MS patients treated with various drugs, including fingolimod, but contains no pharmacokinetic data or models. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
