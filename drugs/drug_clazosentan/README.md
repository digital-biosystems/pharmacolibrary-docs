<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;clazosentan&quot;}]"></div>

# clazosentan

- **generic name:** clazosentan
- **ATC codes:** `C04AX33`
- **DrugBank:** [DB06677](https://go.drugbank.com/drugs/DB06677) · **PubChem:** not captured
- **molar mass:** 577.58 g/mol (C25H23N9O6S) — DrugBank
- **groups:** investigational

## About

Clazosentan is an investigational peripheral vasodilator drug. It has not been approved by regulators such as the European Medicines Agency and remains under investigation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1099339](https://www.wikidata.org/wiki/Q1099339) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clazosentan | parent | 577.58 | C25H23N9O6S | DrugBank | — | van_2007 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [van_2007_reference](drugs/drug_clazosentan/Clazosentan_van2007_reference.md) | — | 1-compartment (no model) | 1 | van Giersbergen PL et al., Influence of ethnic origin and sex on t…, Journal of clinical pharmac… (2007) | [10.1177/0091270007307337](https://doi.org/10.1177/0091270007307337) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Henrich_2021_QTcF](drugs/drug_clazosentan/pd_Henrich_2021_QTcF.md) | placebo-corrected change-from-baseline QT interval corrected for RR with Fridericia's formula ← clazosentan · indirect response — drug inhibits the loss of placebo-corrected change-from-baseline QT interval corrected for RR with Fridericia's formula | — | Henrich A et al., PK/PD modeling of a clazosentan thoroug…, Journal of pharmacokinetics… (2021) | [10.1007/s10928-020-09728-7](https://doi.org/10.1007/s10928-020-09728-7) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:58 | 2:57 | 0/1/0 | 1/0/0 | 0/0/0 | 39,245/7,075 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Volz_2019.pdf` | Volz AK et al., Target-Mediated Population Pharmacokine…, Pharmaceutical research (2019) | popPK | 10 | [10.1007/s11095-019-2723-3](https://doi.org/10.1007/s11095-019-2723-3) | [31823033](https://pubmed.ncbi.nlm.nih.gov/31823033) | The paper describes a population PK model for clazosentan, but the specific numeric parameter values are not present in the provided evidence text. |
| `Bruderer_2011.pdf` | Bruderer S et al., Influence of different degrees of liver…, British journal of clinical… (2011) | popPK | 9 | [10.1111/j.1365-2125.2010.03804.x](https://doi.org/10.1111/j.1365-2125.2010.03804.x) | [21143501](https://pubmed.ncbi.nlm.nih.gov/21143501) | The study reports quantitative PK parameters (AUC ratios) for clazosentan in humans, but specific clearance, volume, or half-life values are not explicitly listed in the provided text. |
| `Bruderer_2011_2.pdf` | Bruderer S et al., Influence of severe renal impairment on…, Journal of clinical pharmac… (2011) | popPK | 9 | [10.1177/0091270010368975](https://doi.org/10.1177/0091270010368975) | [20926750](https://pubmed.ncbi.nlm.nih.gov/20926750) | The study reports PK parameters for clazosentan in humans, but the evidence only provides relative percentage differences between groups rather than absolute numeric values for clearance, volume, or half-life. |
| `van_2007.pdf` | van Giersbergen PL et al., Influence of ethnic origin and sex on t…, Journal of clinical pharmac… (2007) | popPK | 9 | [10.1177/0091270007307337](https://doi.org/10.1177/0091270007307337) | [17906281](https://pubmed.ncbi.nlm.nih.gov/17906281) | The study reports a 3-compartment model and specific disposition half-lives (6 min, 21 min, 2.7 h) for clazosentan in humans, but specific clearance and volume values are not explicitly listed in the provided text. |
| `Henrich_2021.pdf` | Henrich A et al., PK/PD modeling of a clazosentan thoroug…, Journal of pharmacokinetics… (2021) | popPK | 8 | [10.1007/s10928-020-09728-7](https://doi.org/10.1007/s10928-020-09728-7) | [33389549](https://pubmed.ncbi.nlm.nih.gov/33389549) | The paper describes a population PK model (linear two-compartment) for clazosentan in a human thorough QT study, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |

<sub>queue written 2026-10-06T19:56:02.665933+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bruderer_2011 | relevant | 9 | 2 | The study reports quantitative PK parameters (AUC ratios) for clazosentan in humans, but specific clearance, volume, or half-life values are not explicitly listed in the provided text. |
| popPK | Bruderer_2011_2 | relevant | 9 | 2 | The study reports PK parameters for clazosentan in humans, but the evidence only provides relative percentage differences between groups rather than absolute numeric values for clearance, volume, or half-life. |
| popPK | Henrich_2021 | relevant | 8 | 0 | The paper describes a population PK model (linear two-compartment) for clazosentan in a human thorough QT study, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| PGx | Kaamini_2024 | not_relevant | 0 | 0 | The text is a letter to the editor advocating for personalized medicine and genetic screening but does not report specific pharmacogenomic data or effects on clazosentan PK/PD parameters. |
| popPK | Volz_2019 | relevant | 10 | 0 | The paper describes a population PK model for clazosentan, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Zisowsky_2014 | irrelevant | 0 | 0 | The paper reports a pharmacodynamic model for AST (aspartate aminotransferase) levels, not pharmacokinetic parameters (CL, V, etc.) for clazosentan. |
| PD | Zisowsky_2014 | not_relevant | 0 | 0 | The provided text describes a time-course model for AST (aspartate aminotransferase) levels, not a concentration- or dose-response relationship for clazosentan. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 19:56 UTC</sub>
