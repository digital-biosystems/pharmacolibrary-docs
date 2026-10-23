<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08E&quot;,&quot;href&quot;:&quot;atc/C08E.md&quot;},{&quot;label&quot;:&quot;lidoflazine&quot;}]"></div>

# lidoflazine

- **generic name:** lidoflazine
- **ATC codes:** `C08EX01`
- **DrugBank:** [DB13766](https://go.drugbank.com/drugs/DB13766) · **PubChem:** not captured
- **molar mass:** 491.627 g/mol (C30H35F2N3O) — DrugBank
- **groups:** approved

## About

Lidoflazine is a calcium channel blocker and vasodilator used for cardiovascular conditions. It has been approved as a medicine, though it is not authorised in the European Union and does not appear to be widely used today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6543740](https://www.wikidata.org/wiki/Q6543740) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lidoflazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `SLC29A1` inhibitor | DrugBank actor |
| distribution | liver | `SLC29A1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SCN3A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:01 | 1:06 | 0/0/0 | 0/0/0 | 0/0/0 | 32,351/707 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 27 matched, 26 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Katchman_2006.pdf` | Katchman AN et al., Comparative evaluation of HERG currents…, The Journal of pharmacology… (2006) | pd | 5 | [10.1124/jpet.105.093393](https://doi.org/10.1124/jpet.105.093393) | [16278312](https://www.ncbi.nlm.nih.gov/pubmed/16278312) | metadata signals extractable PD data (IC50) |
| `Janis_1984.pdf` | Janis RA et al., Characteristics of the binding of [3H]n…, The Journal of pharmacology… (1984) | pd | 4 | not captured | [6208356](https://www.ncbi.nlm.nih.gov/pubmed/6208356) | metadata signals extractable PD data (IC50) |
| `Pirovano_1990.pdf` | Pirovano IM et al., Inhibition of nucleoside uptake in huma…, European journal of pharmac… (1990) | pd | 4 | [10.1016/0922-4106(90)90040-5](https://doi.org/10.1016/0922-4106(90)90040-5) | [2073930](https://www.ncbi.nlm.nih.gov/pubmed/2073930) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T05:00:52.625742+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Geer_1993 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of calcium channel blockade in rat brain slices, not a pharmacokinetic study, and reports no disposition parameters for lidoflazine. |
| popPK | Griffith_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transport inhibition, not a pharmacokinetic study reporting disposition parameters for lidoflazine. |
| popPK | Griffiths_1997 | irrelevant | 0 | 0 | The paper is a molecular biology study on nucleoside transporters where lidoflazine is only mentioned as a comparator for transporter inhibition, with no pharmacokinetic parameters reported. |
| PD | Griffiths_1997 | not_relevant | 0 | 0 | The paper reports molecular cloning and transporter characterization (Km, IC50 for inhibition) but does not report a pharmacodynamic exposure-response or dose-response relationship for lidoflazine in a clinical or physiological context. |
| popPK | Hammond_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transport in tumor cells where lidoflazine derivatives are used only as inhibitors, not as the subject of pharmacokinetic analysis. |
| PD | Hammond_1991 | not_relevant | 0 | 0 | The paper reports in vitro transporter inhibition kinetics (IC50) for a lidoflazine derivative, not a pharmacodynamic exposure-response or dose-response relationship for lidoflazine itself. |
| popPK | Hugtenburg_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium antagonists on cardiac contractility, not a pharmacokinetic study. |
| popPK | Ijzerman_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transport inhibition and does not report pharmacokinetic disposition parameters for lidoflazine. |
| popPK | Janis_1984 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| PD | Janis_1984 | not_relevant | 0 | 0 | The paper focuses on the binding characteristics of nitrendipine and other calcium channel antagonists to rabbit ventricular membranes, with no mention of lidoflazine or any pharmacodynamic/exposure-response analysis for it. |
| popPK | Kang_2012 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel pharmacology, not a pharmacokinetic study, and lidoflazine is used only as a comparator antagonist. |
| popPK | Katchman_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel blockade and does not report any pharmacokinetic parameters for lidoflazine. |
| popPK | Kenny_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of fluspirilene's calcium channel antagonism, with lidoflazine mentioned only as a comparator in binding assays, and no pharmacokinetic parameters are reported. |
| PD | Kenny_1990 | not_relevant | 0 | 0 | The paper focuses on fluspirilene; lidoflazine is only mentioned as a comparator in binding assays without specific numeric PD parameters or dose-response curves provided for it. |
| popPK | Nakagawa_1986 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium entry blocking activity in dog coronary artery strips, not a pharmacokinetic study, and reports no disposition parameters for lidoflazine. |
| popPK | Palmer_1993 | irrelevant | 0 | 0 | The study is a pharmacological evaluation of anticonvulsant properties in mice and reports no pharmacokinetic parameters for lidoflazine. |
| PD | Palmer_1993 | not_relevant | 0 | 0 | The paper states that lidoflazine was inactive in all tests and does not provide any numeric PD parameters or dose-response data for it. |
| popPK | Pauwels_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuroprotection in neuronal cultures, not a pharmacokinetic study, and reports no disposition parameters for lidoflazine. |
| popPK | Pirovano_1990 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| popPK | Plagemann_1987 | irrelevant | 0 | 0 | The study investigates the mechanism of nucleoside transport inhibition in cells (in-vitro) and does not report pharmacokinetic disposition parameters for lidoflazine. |
| popPK | Plagemann_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transport inhibition (IC50 values) and does not report pharmacokinetic disposition parameters for lidoflazine. |
| popPK | Reimão_2016 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| PD | Reimão_2016 | not_relevant | 0 | 0 | The paper investigates calcium channel blockers as antiprotozoal agents and their metabolic interference in Leishmania, but does not report a pharmacodynamic or exposure-response relationship for lidoflazine with numeric PD parameters. |
| popPK | Ridley_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of HERG channel blockade and does not report any pharmacokinetic parameters for lidoflazine. |
| popPK | Singh_1986 | irrelevant | 0 | 0 | The paper is a review of the mechanism of action of calcium antagonists and does not report any quantitative pharmacokinetic parameters for lidoflazine. |
| PD | Singh_1986 | not_relevant | 1 | 0 | The text is a qualitative review classifying calcium antagonists and mentions lidoflazine only as a Type IV agent without providing any numeric PD parameters or exposure-response data. |
| popPK | Smith_1985 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channel blocking effects in cat papillary muscles, not a pharmacokinetic study. |
| popPK | Thorn_1996 | irrelevant | 0 | 0 | The paper is a review of adenosine transporters and mentions lidoflazine only as a transport inhibitor, providing no pharmacokinetic parameters for lidoflazine. |
| popPK | Zimmerman_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of superoxide anion generation, not a pharmacokinetic study, and reports no disposition parameters for lidoflazine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
