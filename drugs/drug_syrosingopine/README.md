<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02L&quot;,&quot;href&quot;:&quot;atc/C02L.md&quot;},{&quot;label&quot;:&quot;Syrosingopine&quot;}]"></div>

# Syrosingopine

- **generic name:** Syrosingopine
- **ATC codes:** `C02LA09`
- **DrugBank:** [DB19379](https://go.drugbank.com/drugs/DB19379) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Syrosingopine is a Rauwolfia alkaloid that was used to lower blood pressure in people with hypertension, typically combined with a diuretic. It has been withdrawn and is no longer in clinical use.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:55 | 0:36 | 0/0/0 | 0/0/0 | 0/0/0 | 11,730/462 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Humphrey_1978.pdf` | Humphrey PP, The effects of alpha-adrenoceptor antag…, British journal of pharmaco… (1978) | pd | 4 | [10.1111/j.1476-5381.1978.tb17281.x](https://doi.org/10.1111/j.1476-5381.1978.tb17281.x) | [28807](https://www.ncbi.nlm.nih.gov/pubmed/28807) | metadata signals extractable PD data (concentration-effect) |
| `Levin_1983.pdf` | Levin RJ et al., Rat endometrial bioelectric activity in…, The Journal of physiology (1983) | pd | 4 | [10.1113/jphysiol.1983.sp014591](https://doi.org/10.1113/jphysiol.1983.sp014591) | [6135798](https://www.ncbi.nlm.nih.gov/pubmed/6135798) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-10-06T14:55:17.131417+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrett_1970 | irrelevant | 0 | 0 | Syrosingopine is used only as a catecholamine-depleting agent to facilitate the study of beta-adrenoceptor antagonists, and no pharmacokinetic parameters for syrosingopine are reported. |
| PD | Barrett_1970 | not_relevant | 0 | 0 | Syrosingopine is used only as a catecholamine-depleting pretreatment agent; the paper reports dose-response curves for beta-adrenoceptor antagonists, not for Syrosingopine itself. |
| popPK | Bashir_2026 | irrelevant | 0 | 0 | The study focuses on the binding of Ganoderic Acid A to MCTs, using syrosingopine only as a reference inhibitor in in silico/in vitro assays, with no PK parameters reported. |
| PD | Bashir_2026 | not_relevant | 0 | 0 | The paper focuses on the binding of Ganoderic Acid A to MCTs, using Syrosingopine only as a reference ligand in docking simulations, and does not report any pharmacodynamic or exposure-response data for Syrosingopine. |
| popPK | Humphrey_1978 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Humphrey_1978 | not_relevant | 0 | 0 | The paper studies alpha-adrenoceptor antagonists on 5-HT responses in dog saphenous vein and does not mention Syrosingopine or report any PD parameters for it. |
| popPK | Levin_1983 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Levin_1983 | not_relevant | 0 | 0 | The paper focuses on the effects of adrenaline on rat endometrial bioelectric activity and does not mention Syrosingopine or provide any PD parameters for it. |
| popPK | Lumley_1977 | irrelevant | 0 | 0 | The study investigates the inotropic selectivity of dobutamine and dopamine, using syrosingopine only as a pharmacological tool to block indirect sympathomimetic activity, with no PK parameters reported. |
| PD | Lumley_1977 | not_relevant | 1 | 0 | The paper mentions syrosingopine only as a pretreatment agent to test the mechanism of dopamine's selectivity, but does not report any exposure-response or dose-response data, curves, or numeric PD parameters for syrosingopine itself. |
| popPK | Saavedra-García_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on cancer cell stress resolution and does not involve syrosingopine or pharmacokinetic parameters. |
| PD | Saavedra-García_2021 | not_relevant | 0 | 0 | The paper focuses on multiomics profiling of stress resolution in cancer cells and does not report any pharmacodynamic or exposure-response data for Syrosingopine. |
| popPK | Smith_1984 | irrelevant | 0 | 0 | Syrosingopine is used only as a pretreatment agent to block sympathetic tone in a pharmacodynamic study of beta-blockers and calcium channel blockers, with no PK parameters reported for syrosingopine. |
| PGx | Spinello_2024 | not_relevant | 0 | 0 | The paper investigates the antiviral mechanism of syrosingopine in megakaryocytes and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
