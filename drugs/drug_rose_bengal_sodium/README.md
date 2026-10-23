<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01J&quot;,&quot;href&quot;:&quot;atc/S01J.md&quot;},{&quot;label&quot;:&quot;rose bengal sodium&quot;}]"></div>

# rose bengal sodium

- **generic name:** rose bengal sodium
- **ATC codes:** `S01JA02`
- **DrugBank:** [DB11182](https://go.drugbank.com/drugs/DB11182) · **PubChem:** not captured
- **molar mass:** 973.673 g/mol (C20H4Cl4I4O5) — DrugBank
- **groups:** approved, investigational

## About

Rose bengal sodium is a dye used as a diagnostic colouring agent in ophthalmology, for example to stain damaged cells on the eye surface. It is an approved ophthalmic diagnostic agent and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27088610](https://www.wikidata.org/wiki/Q27088610) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-07 21:12 | 0:47 | 0/0/0 | 0/0/0 | 0/0/0 | 51,271/1,625 | einfracz / qwen3.8-27b | 12 | 1/6 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 86 matched, 56 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Galli_1981.pdf` | Galli G et al., Functional study with 131I-rose bengal…, European journal of nuclear… (1981) | popPK | 10 | [10.1007/BF00266419](https://doi.org/10.1007/BF00266419) | [7215372](https://pubmed.ncbi.nlm.nih.gov/7215372) | The paper reports a three-compartment PK model for Rose Bengal in humans, but the specific numeric parameter values (transfer constants K12, K21, etc.) are not explicitly listed in the provided evidence, only referenced and used in a discrimination formula. |
| `Pirotte_1980.pdf` | Pirotte J, Study of 131I-rose bengal kinetics in n…, Biomedicine / [publiee pour… (1980) | popPK | 10 | not captured | [7370377](https://pubmed.ncbi.nlm.nih.gov/7370377) | The paper describes a three-compartment PK model for rose bengal in humans, but the specific numeric parameter values are not present in the provided text. |
| `Wang_1992.pdf` | Wang HK et al., Nonlinear pharmacokinetics of hepatobil…, Biopharmaceutics & drug dis… (1992) | popPK | 10 | [10.1002/bdd.2510130903](https://doi.org/10.1002/bdd.2510130903) | [1467452](https://pubmed.ncbi.nlm.nih.gov/1467452) | The study reports quantitative nonlinear pharmacokinetic parameters for rose bengal in rats, including specific Michaelis-Menten values (Vmax, Km) and transport maximum in the abstract, though detailed compartmental parameter values are not fully listed in the provided text. |

<sub>queue written 2026-10-07T21:12:51.917882+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chuman_2014 | not_relevant | 0 | 0 | The paper is an animal model study (rats) focusing on disease pathophysiology and treatment efficacy, with no investigation into human genetic variants or pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of rose bengal sodium. |
| popPK | Cui_2025 | irrelevant | 0 | 0 | The study is an in-vitro antimicrobial/antifungal activity study of BODIPY photosensitizers, using Rose Bengal only as a commercial comparator, with no pharmacokinetic parameters reported. |
| popPK | Dickinson_1997 | irrelevant | 0 | 0 | The study is an in-vitro binding assay where rose bengal is used as a diagnostic agent/inhibitor to characterize potassium channel openers, not as a subject of pharmacokinetic analysis. |
| PGx | Furumiya_2008 | not_relevant | 0 | 0 | The paper reports general enzyme inhibition by dyes, not the effect of specific gene variants or genotypes on rose bengal pharmacokinetics or pharmacodynamics. |
| popPK | Galli_1981 | relevant | 10 | 2 | The paper reports a three-compartment PK model for Rose Bengal in humans, but the specific numeric parameter values (transfer constants K12, K21, etc.) are not explicitly listed in the provided evidence, only referenced and used in a discrimination formula. |
| popPK | Kaibara_1988 | irrelevant | 0 | 0 | The study investigates calcium channel kinetics in guinea-pig myocytes using Rose Bengal as a photo-oxidizing agent, not as a subject drug for pharmacokinetic analysis. |
| PGx | Kazmi_2014 | not_relevant | 0 | 0 | The paper studies in vitro enzyme inhibition by rose bengal, not a pharmacogenomic effect on its PK/PD. |
| PGx | Kim_2012 | not_relevant | 0 | 0 | The paper focuses on the effect of retinoic acid on corneal epithelial cell differentiation and mucin expression in an in vitro model, with no mention of pharmacogenomic effects or pharmacokinetic/pharmacodynamic parameters for rose_bengal_sodium. |
| PGx | Mizutani_2009 | not_relevant | 0 | 0 | The paper describes in vitro enzyme inhibition of drug-metabolizing enzymes by rose bengal and other dyes, but does not investigate how a human gene variant or genotype affects the PK/PD of rose bengal. |
| popPK | Nigam_1993 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics and enzyme inhibition of glyceryl trinitrate (GTN) in rat aorta using Rose Bengal only as a glutathione S-transferase inhibitor, not as the subject drug for pharmacokinetic analysis. |
| popPK | Okabe_2025 | irrelevant | 0 | 0 | The paper describes neural circuit mechanisms in stroke recovery in mice and does not contain any pharmacokinetic data for rose bengal sodium. |
| popPK | Pirotte_1979 | irrelevant | 2 | 0 | The paper discusses the theoretical suitability of 131I Rose Bengal for compartmental analysis of cholephil clearance but provides no specific quantitative PK parameters (CL, V, etc.) in the evidence. |
| popPK | Pirotte_1980 | relevant | 10 | 0 | The paper describes a three-compartment PK model for rose bengal in humans, but the specific numeric parameter values are not present in the provided text. |
| popPK | Poirel_2020 | irrelevant | 0 | 0 | The study investigates the pharmacology of a new VGLUT inhibitor (LSP5-2157) and mentions Rose Bengal only as a non-specific dye comparator in the introduction; no pharmacokinetic parameters (CL, V, etc.) for Rose Bengal are reported. |
| popPK | Shiao_2019 | irrelevant | 0 | 0 | The study evaluates rose bengal as a photosensitizer for photodynamic insecticidal activity in mosquitoes, not as a pharmacokinetic subject, and reports no PK parameters. |
| popPK | Sigudu_2026 | irrelevant | 0 | 0 | The paper is an epidemiological study of the Rose Bengal Test (a diagnostic serological assay) for brucellosis, not a pharmacokinetic study of rose bengal sodium. |
| popPK | Sugimoto_1993 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of indocyanine green (ICG), using rose bengal only for in-vitro binding affinity assays rather than PK modeling. |
| popPK | Tassonyi_1995 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of pipecuronium, using rose bengal only as a reagent for quantification. |
| popPK | Turco_1966 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| popPK | Turco_1968 | irrelevant | 0 | 0 | no_text gate: only 154 chars of text extracted (&lt; 400) |
| PGx | Vig_2024 | not_relevant | 2 | 5 | The study uses engineered cell lines overexpressing transporters rather than human genetic variants, and focuses on cellular intracellular accumulation/transport rather than systemic pharmacokinetics or pharmacodynamics in humans. |
| popPK | Wesołowski_2026 | irrelevant | 0 | 0 | The paper is a review of oxidative stress in Acanthamoeba keratitis and does not report pharmacokinetic parameters for rose bengal sodium. |
| popPK | Zinsstag_2005 | irrelevant | 0 | 0 | The paper is an epidemiological transmission model for brucellosis using the Rose Bengal test as a diagnostic serology tool, not a pharmacokinetic study of the drug rose bengal sodium. |
| popPK | de_1980 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
