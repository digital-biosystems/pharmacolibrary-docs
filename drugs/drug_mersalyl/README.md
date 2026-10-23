<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;mersalyl&quot;}]"></div>

# mersalyl

- **generic name:** mersalyl
- **ATC codes:** `C03BC01`
- **DrugBank:** [DB09338](https://go.drugbank.com/drugs/DB09338) · **PubChem:** [CID 443130](https://pubchem.ncbi.nlm.nih.gov/compound/443130)
- **molar mass:** 483.87 g/mol (C13H17HgNO6) — DrugBank
- **groups:** experimental

## About

Mersalyl is a mercurial compound that was formerly used as a diuretic to treat fluid retention.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424871](https://www.wikidata.org/wiki/Q424871) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:22 | 0:36 | 0/0/0 | 0/0/0 | 0/0/0 | 19,239/535 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 22 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beavis_1991.pdf` | Beavis AD, N-ethylmaleimide and mercurials modulat…, Biochimica et biophysica ac… (1991) | pd | 4 | [10.1016/0005-2736(91)90360-k](https://doi.org/10.1016/0005-2736(91)90360-k) | [1707670](https://www.ncbi.nlm.nih.gov/pubmed/1707670) | metadata signals extractable PD data (IC50) |
| `Natuzzi_1999.pdf` | Natuzzi D et al., Inactivation of the reconstituted oxogl…, Journal of bioenergetics an… (1999) | pd | 4 | [10.1023/a:1026414826457](https://doi.org/10.1023/a:1026414826457) | [10682911](https://www.ncbi.nlm.nih.gov/pubmed/10682911) | metadata signals extractable PD data (IC50) |
| `Orlický_1987.pdf` | Orlický J et al., Effects of sulfhydryl reagents on Na+-C…, General physiology and biop… (1987) | pd | 4 | not captured | [3653680](https://www.ncbi.nlm.nih.gov/pubmed/3653680) | metadata signals extractable PD data (IC50) |
| `Varecka_1986.pdf` | Varecka L et al., Inhibition by divalent cations and sulp…, Biochimica et biophysica ac… (1986) | pd | 4 | [10.1016/0005-2736(86)90151-3](https://doi.org/10.1016/0005-2736(86)90151-3) | [2421771](https://www.ncbi.nlm.nih.gov/pubmed/2421771) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T17:22:08.066620+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anner_1992 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on Na-K-ATPase inhibition and does not report pharmacokinetic parameters for mersalyl. |
| popPK | Beavis_1989 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on mitochondrial membrane binding sites, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Beavis_1991 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mitochondrial membrane channels, not a pharmacokinetic study, and reports no disposition parameters for mersalyl. |
| PD | Beavis_1991 | not_relevant | 3 | 2 | The paper reports qualitative shifts in IC50 values for mitochondrial channel inhibitors upon mersalyl pretreatment, but does not provide specific numeric PD parameters or a quantitative exposure-response curve for mersalyl itself. |
| popPK | Jung_1997 | irrelevant | 0 | 0 | The paper is a mechanistic study of mitochondrial permeability transition pores in yeast, where mersalyl is used only as a tool compound to inhibit Pi/OH- antiport, not as a subject of pharmacokinetic analysis. |
| PD | Jung_1997 | not_relevant | 0 | 0 | The paper describes mitochondrial biochemistry and pore regulation; mersalyl is mentioned only as a tool to inhibit Pi/OH- antiport, with no drug exposure-response or PD parameters reported. |
| popPK | Lalitha_1995 | irrelevant | 0 | 0 | The study investigates selenium uptake in plant mitochondria and uses mersalyl only as a thiol inhibitor, not as the subject of pharmacokinetic analysis. |
| PD | Lalitha_1995 | not_relevant | 1 | 1 | The paper reports a qualitative inhibition percentage (40-60%) for mersalyl on selenium uptake but does not provide specific concentrations, dose-response curves, or numeric PD parameters (like IC50) for mersalyl. |
| popPK | Luger_1981 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion transport mechanisms in rabbit colon, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Martínez_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of taurine transport where mersalyl is used as a reagent, not a pharmacokinetic study of mersalyl disposition. |
| PD | Martínez_1994 | not_relevant | 2 | 1 | The paper reports qualitative effects of mersalyl on taurine efflux at fixed concentrations (0.5-1 mM) but does not provide a dose-response curve, IC50, or other numeric PD parameters for mersalyl. |
| popPK | Mavier_1975 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme inhibition, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Molina_1995 | irrelevant | 0 | 0 | The paper studies glutamine transport in tumor mitochondria and mentions mersalyl only as an ineffective thiol reagent, not as a subject of pharmacokinetic analysis. |
| PD | Molina_1995 | not_relevant | 0 | 0 | The paper reports that mersalyl did not significantly affect glutamine transport, providing no numeric dose-response or exposure-response relationship. |
| popPK | Natuzzi_1999 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Natuzzi_1999 | not_relevant | 0 | 0 | The paper studies the inactivation of a mitochondrial carrier by pyridoxal 5'-phosphate and does not mention mersalyl or report any pharmacodynamic or exposure-response data for it. |
| popPK | Oppedisano_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter inhibition, not a pharmacokinetic study reporting disposition parameters for mersalyl. |
| popPK | Orlický_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Na+-Ca2+ exchange inhibition and does not report any pharmacokinetic parameters for mersalyl. |
| popPK | Porzig_1970 | irrelevant | 0 | 0 | The study investigates calcium efflux kinetics in human erythrocyte ghosts, using mersalyl only as a reagent to remove inexchangeable calcium, not as the subject of pharmacokinetic analysis. |
| popPK | Powers_1991 | irrelevant | 0 | 0 | The paper is a mechanistic study on mitochondrial anion channels where mersalyl is used only as a chemical probe/comparator, not as a subject for pharmacokinetic analysis. |
| PD | Powers_1991 | not_relevant | 1 | 1 | The paper reports qualitative interactions and a 10-fold shift in IC50 for mersalyl, but does not provide numeric PD parameters (like specific IC50 values or Emax) or a concentration-effect curve for mersalyl itself. |
| popPK | Steib_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on glutamine transport where mersalyl is used only as a thiol reagent inhibitor, not as the subject drug for PK analysis. |
| PD | Steib_1986 | not_relevant | 1 | 0 | The paper mentions mersalyl only as a qualitative inhibitor of glutamine transport without providing specific concentration-effect data or numeric PD parameters for mersalyl. |
| popPK | Stipani_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mitochondrial transport inhibition where mersalyl is used only as a chemical probe, with no pharmacokinetic parameters reported. |
| PD | Stipani_1996 | not_relevant | 0 | 0 | The paper investigates the mechanism of inhibition by arginine-specific reagents and notes that mersalyl failed to protect the carrier, but it does not report a concentration-effect relationship or numeric PD parameters for mersalyl itself. |
| popPK | Tse_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PAH uptake inhibition by mersalyl and analogs, reporting Ki values rather than pharmacokinetic disposition parameters. |
| popPK | Varecka_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on calcium transport inhibition where mersalyl is used as a reagent, not a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
