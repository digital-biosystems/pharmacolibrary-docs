<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;pranlukast&quot;}]"></div>

# pranlukast

- **generic name:** pranlukast
- **ATC codes:** `R03DC02`
- **DrugBank:** [DB01411](https://go.drugbank.com/drugs/DB01411) · **PubChem:** [CID 4887](https://pubchem.ncbi.nlm.nih.gov/compound/4887)
- **molar mass:** 481.512 g/mol (C27H23N5O4) — DrugBank
- **groups:** investigational

## About

Pranlukast is a leukotriene receptor antagonist developed as an antiasthmatic medicine for obstructive airway disease. It is not authorised in the European Union and is listed as investigational, so its availability appears limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7238392](https://www.wikidata.org/wiki/Q7238392) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Asano_2009_reference](drugs/drug_pranlukast/Pranlukast_Asano2009_reference.md) | — | 1-compartment (no model) | 0 | Asano K et al., Impact of pharmacokinetics and pharmaco…, Respirology (Carlton, Vic.) (2009) | [10.1111/j.1440-1843.2009.01552.x](https://doi.org/10.1111/j.1440-1843.2009.01552.x) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Nakade_2006_reference](drugs/drug_pranlukast/Pranlukast_Nakade2006_reference.md) | — | 1-compartment (no model) | 0 | Nakade S et al., Population pharmacokinetics of pranluka…, Drug metabolism and pharmac… (2006) | [10.2133/dmpk.21.133](https://doi.org/10.2133/dmpk.21.133) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yang_2021_preS1_binding](drugs/drug_pranlukast/pd_Yang_2021_preS1_binding.md) | HBV preS1 binding biomarker turnover ← pranlukast | — | Yang J et al., A new high-content screening assay of t…, JHEP reports : innovation i… (2021) | [10.1016/j.jhepr.2021.100296](https://doi.org/10.1016/j.jhepr.2021.100296) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pranlukast).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCC2` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `ABCC2` inhibitor | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYSLTR1 (target), IL5 (target), MUC2 (other/unknown), NFKB1 (other/unknown), NFKB2 (inhibitor), RNASE3 (other/unknown), TNF (other/unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:09 | 0:42 | 0/2/0 | 1/0/0 | 0/0/0 | 76,472/3,309 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Asano_2009.pdf` | Asano K et al., Impact of pharmacokinetics and pharmaco…, Respirology (Carlton, Vic.) (2009) | popPK | 10 | [10.1111/j.1440-1843.2009.01552.x](https://doi.org/10.1111/j.1440-1843.2009.01552.x) | [19703064](https://pubmed.ncbi.nlm.nih.gov/19703064) | The paper reports a population pharmacokinetic analysis of pranlukast in humans, providing explicit values for mean oral clearance (CL/F) and inter-individual variability in the abstract. |
| `Nakade_2006.pdf` | Nakade S et al., Population pharmacokinetics of pranluka…, Drug metabolism and pharmac… (2006) | popPK | 10 | [10.2133/dmpk.21.133](https://doi.org/10.2133/dmpk.21.133) | [16702733](https://pubmed.ncbi.nlm.nih.gov/16702733) | The study is a population PK analysis of pranlukast reporting variability and model structure, but specific mean parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |

<sub>queue written 2026-10-07T22:08:46.354393+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biagioli_2020 | irrelevant | 0 | 0 | The study focuses on the off-target pharmacology of a CysLT1R antagonist (REV5901) and its interaction with GPBAR1, with no pharmacokinetic parameters reported for pranlukast. |
| popPK | Göbel_2019 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study investigating the polypharmacology of pranlukast (sEH and PPARγ modulation), reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Liu_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of mucus secretion, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for pranlukast. |
| popPK | Sarau_1999 | irrelevant | 0 | 0 | The paper is a mechanistic study on the molecular cloning and characterization of a receptor, not a pharmacokinetic study of pranlukast. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | This is an in vitro antiviral screening study where pranlukast is used as a reference compound to characterize a cell culture assay, not to measure its pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 22:08 UTC</sub>
