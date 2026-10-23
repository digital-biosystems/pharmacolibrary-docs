<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;fluocortolone&quot;}]"></div>

# fluocortolone

- **generic name:** fluocortolone
- **ATC codes:** `C05AA08`, `D07AC05`, `D07BC03`, `D07CC06`, `D07XC05`, `H02AB03`, `S01CA04`
- **DrugBank:** [DB08971](https://go.drugbank.com/drugs/DB08971) · **PubChem:** [CID 9053](https://pubchem.ncbi.nlm.nih.gov/compound/9053)
- **molar mass:** 376.4617 g/mol (C22H29FO4) — DrugBank
- **groups:** approved, withdrawn

## About

Fluocortolone is a glucocorticoid (corticosteroid) with anti-inflammatory activity, used topically for skin conditions, haemorrhoids, and eye inflammation, and also systemically. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5462793](https://www.wikidata.org/wiki/Q5462793) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dirks_2008_AP_1](drugs/drug_fluocortolone/pd_Dirks_2008_AP_1.md) | SEAP expression (AP-1 mediated transrepression) ← fluocortolone · direct sigmoid Emax (Hill) effect | — | Dirks NL et al., Transrepression and transactivation pot…, Die Pharmazie (2008) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dirks_2008_GRE](drugs/drug_fluocortolone/pd_Dirks_2008_GRE.md) | SEAP expression (GRE mediated transactivation) ← fluocortolone · direct sigmoid Emax (Hill) effect | — | Dirks NL et al., Transrepression and transactivation pot…, Die Pharmazie (2008) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dirks_2008_NF_jB](drugs/drug_fluocortolone/pd_Dirks_2008_NF_jB.md) | SEAP expression (NF-jB mediated transrepression) ← fluocortolone · direct sigmoid Emax (Hill) effect | — | Dirks NL et al., Transrepression and transactivation pot…, Die Pharmazie (2008) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Rohatagi_1996_cortisol](drugs/drug_fluocortolone/pd_Rohatagi_1996_cortisol.md) | cortisol ← fluocortolone · direct linear effect | — | Rohatagi S et al., Pharmacokinetic/pharmacodynamic modelin…, Journal of clinical pharmac… (1996) | [10.1002/j.1552-4604.1996.tb04206.x](https://doi.org/10.1002/j.1552-4604.1996.tb04206.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fluocortolone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:48 | 0:48 | 0/0/0 | 2/0/0 | 0/0/0 | 21,695/1,463 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rohatagi_1996.pdf` | Rohatagi S et al., Pharmacokinetic/pharmacodynamic modelin…, Journal of clinical pharmac… (1996) | popPK | 9 | [10.1002/j.1552-4604.1996.tb04206.x](https://doi.org/10.1002/j.1552-4604.1996.tb04206.x) | [8728344](https://pubmed.ncbi.nlm.nih.gov/8728344) | The study describes a PK/PD model for fluocortolone in humans, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence, only the E50 value. |
| `Lew_1993.pdf` | Lew KH et al., Pharmacodynamic modeling of cortisol su…, European journal of clinica… (1993) | pd | 5 | [10.1007/BF00315319](https://doi.org/10.1007/BF00315319) | [8157047](https://www.ncbi.nlm.nih.gov/pubmed/8157047) | metadata signals extractable PD data (Pharmacodynamicmodel) |

<sub>queue written 2026-10-06T22:48:00.549869+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dirks_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transcriptional potency (EC50 for gene expression) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for fluocortolone. |
| popPK | Lax_2022 | irrelevant | 0 | 0 | The paper is a clinical review of topical corticosteroid strategies for eczema and does not report pharmacokinetic parameters for fluocortolone. |
| PD | Lax_2022 | not_relevant | 0 | 0 | The paper is a clinical review of topical corticosteroid strategies and does not report any pharmacokinetic or pharmacodynamic modeling, nor specific numeric PD parameters for fluocortolone. |
| popPK | Legler_1988 | relevant | 9 | 0 | The study is a pharmacokinetic investigation of fluocortolone in humans, but the provided evidence contains only qualitative descriptions of results (e.g., "no significant change") without any specific numeric parameter values. |
| PD | Legler_1988 | not_relevant | 0 | 0 | The paper reports only PK parameters (clearance, volume of distribution) and a qualitative observation of increased hydrocortisone levels, with no concentration-effect or dose-response analysis for fluocortolone. |
| popPK | Lew_1993 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| popPK | Rohatagi_1996 | relevant | 9 | 1 | The study describes a PK/PD model for fluocortolone in humans, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence, only the E50 value. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
