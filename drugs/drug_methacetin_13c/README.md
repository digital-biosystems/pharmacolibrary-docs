<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;methacetin (13C)&quot;}]"></div>

# methacetin (13C)

- **generic name:** methacetin (13C)
- **ATC codes:** `V04CE03`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

It is used for medical diagnostics.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:58 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 2,966/165 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zeng_1996.pdf` | Zeng W et al., 13C-methacetin breath test parameter S…, Science in China. Series C,… (1996) | popPK | 5 |  | [8760475](https://pubmed.ncbi.nlm.nih.gov/8760475) | The paper describes a diagnostic breath test parameter 'S' for liver disease rather than reporting standard compartmental PK parameters (CL, V, t1/2) for the drug itself, and no specific numeric values are provided in the evidence. |

<sub>queue written 2026-11-24 00:58 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barstow_1990 | irrelevant | 0 | 0 | The paper is a general review of liver function assessment that mentions methacetin only as a historical example of a probe drug, providing no original quantitative PK parameters for methacetin or methacetin-13c. |
| PGx | Barstow_1990 | not_relevant | 0 | 0 | The text is a general review of liver function assessment using methacetin as a substrate but does not report specific pharmacogenomic effects on its PK parameters. |
| popPK | Getchell_1993 | irrelevant | 0 | 0 | The paper describes histological and microchemical analysis of olfactory mucus in salamanders and does not involve pharmacokinetic analysis of methacetin_13c. |
| PGx | Getchell_1993 | not_relevant | 0 | 0 | The paper describes mucociliary heterogeneity in olfactory epithelium using lectin probes and is unrelated to pharmacogenomics or methacetin_13c. |
| popPK | Gutowski_1991 | irrelevant | 0 | 0 | The paper is about flow cytometry of erythrocytes and glycophorin, not pharmacokinetics of methacetin_13c. |
| PGx | Gutowski_1991 | not_relevant | 0 | 0 | The paper discusses RBC senescence and lectin binding, not pharmacogenomics or methacetin_13c. |
| popPK | Ihne-Schubert_2024 | irrelevant | 2 | 1 | 13C-methacetin is used only as a diagnostic breath-test probe (PDRpeak) for liver function; no PK disposition parameters (CL, V, ka, half-life) for methacetin are reported, and numeric values live in supplementary tables not provided. |
| popPK | Iwasaki_1992 | relevant | 4 | 0 | The study uses 13C-methacetin as a diagnostic probe to measure liver function (13CO2 excretion rate), rather than modeling the pharmacokinetic parameters (CL, V, ka) of the methacetin drug itself; specific numeric PK values are absent from the provided text. |
| PGx | Iwasaki_1992 | not_relevant | 0 | 0 | The study investigates liver function via a 13C-methacetin breath test and does not report any gene variants or genetic effects on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Lock_2011 | irrelevant | 0 | 0 | The study investigates tacrolimus pharmacokinetics in liver transplant patients, not methacetin_13c. |
| PGx | Lock_2011 | not_relevant | 0 | 0 | The paper studies tacrolimus and graft function, not methacetin_13c, and does not report genetic variants. |
| popPK | Primavesi_2023 | irrelevant | 0 | 0 | Guideline on preoperative liver function assessment; LiMAx (13C-methacetin) is only mentioned as a diagnostic test, no PK parameters for methacetin_13c are reported. |
| popPK | Sharma_2022 | irrelevant | 0 | 0 | The paper discusses the methacetin breath test as a diagnostic clinical assessment for liver function, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for methacetin-13c. |
| PGx | Sharma_2022 | not_relevant | 0 | 0 | The text describes liver function tests (like the methacetin breath test) for assessing cirrhosis, but does not report a pharmacogenomic effect on the PK/PD of methacetin_13c. |
| popPK | Yamamoto_2021 | irrelevant | 0 | 0 | The paper discusses liver function tests for surgical planning and does not mention methacetin-13c or report any pharmacokinetic parameters. |
| PGx | Yamamoto_2021 | not_relevant | 0 | 0 | The paper reviews liver function assessment methods (ICG, MEGX, LiMAX, etc.) and biliary drainage for hepatic resections, and contains no mention of methacetin_13c or any pharmacogenomic effects. |
| popPK | Zeng_1996 | irrelevant | 5 | 0 | The paper describes a diagnostic breath test parameter 'S' for liver disease rather than reporting standard compartmental PK parameters (CL, V, t1/2) for the drug itself, and no specific numeric values are provided in the evidence. |
| PGx | Zeng_1996 | not_relevant | 0 | 0 | The paper focuses on clinical diagnosis of liver disease using a breath test and does not report pharmacogenomic effects on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethacetin_13c%5D&body=Drug%3A%20methacetin_13c%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methacetin_13c/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
