<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;mazindol&quot;}]"></div>

# mazindol

- **generic name:** mazindol
- **ATC codes:** `A08AA05`
- **DrugBank:** [DB00579](https://go.drugbank.com/drugs/DB00579) · **PubChem:** [CID 4020](https://pubchem.ncbi.nlm.nih.gov/compound/4020)
- **molar mass:** 284.74 g/mol (C16H13ClN2O) — DrugBank
- **groups:** approved

## About

Mazindol is a stimulant appetite suppressant used to treat obesity. It has approved status but is not authorised by the European Medicines Agency, so its availability today is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q255680](https://www.wikidata.org/wiki/Q255680) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mazindol | parent | 284.74 | C16H13ClN2O | DrugBank | [4020](https://pubchem.ncbi.nlm.nih.gov/compound/4020) | Konofal_2014 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| ka | kabs | 1.01 | 1/h | 1.01 h−1 | children with ADHD | &gt;=21 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Konofal_2014_basic_model](drugs/drug_mazindol/Mazindol_Konofal2014_basic_model.md) |
| ka | kabs | 1.02 | 1/h | 1.02 h−1 | children with ADHD | &gt;=21 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Konofal_2014_final](drugs/drug_mazindol/Mazindol_Konofal2014_final.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Konofal_2014_basic_model](drugs/drug_mazindol/Mazindol_Konofal2014_basic_model.md) | held back | 1-compartment, oral | 2 | Konofal E et al., Pilot Phase II study of mazindol in chi…, Drug design, development an… (2014) | [10.2147/DDDT.S65495](https://doi.org/10.2147/DDDT.S65495) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [↳ final](drugs/drug_mazindol/Mazindol_Konofal2014_final.md) | held back | 1-compartment, oral | 2 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:34 | 4:04 | 2/0/0 | 0/0/0 | 0/0/0 | 63,248/10,646 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Böhm_1995.pdf` | Böhm M et al., Evidence for reduction of norepinephrin…, Journal of the American Col… (1995) | pd | 4 | [10.1016/0735-1097(94)00353-r](https://doi.org/10.1016/0735-1097(94)00353-r) | [7798493](https://www.ncbi.nlm.nih.gov/pubmed/7798493) | metadata signals extractable PD data (EC50) |
| `Johnson_1992.pdf` | Johnson KM et al., Cocaine and dopamine differentially pro…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0922-4106(92)90159-s](https://doi.org/10.1016/0922-4106(92)90159-s) | [1446711](https://www.ncbi.nlm.nih.gov/pubmed/1446711) | metadata signals extractable PD data (EC50) |
| `Schoretsanitis_2019.pdf` | Schoretsanitis G et al., Clinically Significant Drug-Drug Intera…, CNS drugs (2019) | pgx | 8 | [10.1007/s40263-019-00683-7](https://doi.org/10.1007/s40263-019-00683-7) | [31776871](https://www.ncbi.nlm.nih.gov/pubmed/31776871) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-04T20:30:40.561355+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Böhm_1995 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| popPK | Janowsky_2016 | irrelevant | 0 | 0 | Mazindol is used only as a radioligand for binding assays in this in-vitro study of DAT modulators, not as the subject of a pharmacokinetic study. |
| popPK | Johnson_1992 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| popPK | Johnson_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated efflux in cell lines, not a pharmacokinetic study of mazindol disposition. |
| PGx | Niwa_2008 | not_relevant | 0 | 0 | The paper investigates the inhibition of CYP2D-mediated neurosteroid metabolism by mazindol, not the effect of genetic variants on mazindol's PK/PD. |
| popPK | Richfield_1991 | irrelevant | 0 | 0 | The study is an in vitro binding/autoradiography analysis of the dopamine uptake complex in rat brain, not a pharmacokinetic study of mazindol. |
| PGx | Schoretsanitis_2019 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions for ADHD agents and does not report pharmacogenomic effects on mazindol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 20:30 UTC</sub>
