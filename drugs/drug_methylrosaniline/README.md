<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;methylrosaniline&quot;}]"></div>

# methylrosaniline

- **generic name:** methylrosaniline
- **ATC codes:** `D01AE02`, `G01AX09`
- **DrugBank:** [DB00406](https://go.drugbank.com/drugs/DB00406) · **PubChem:** [CID 3468](https://pubchem.ncbi.nlm.nih.gov/compound/3468)
- **molar mass:** 372.5258 g/mol (C25H30N3) — DrugBank
- **groups:** approved

## About

Methylrosaniline (crystal violet, gentian violet) is a dye used as a topical antifungal and antiseptic, for example for skin fungal infections and as a gynecological antiinfective. It remains an approved medicine and is used topically, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q63390508](https://www.wikidata.org/wiki/Q63390508) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Allgardsson_2017_AChE](drugs/drug_methylrosaniline/pd_Allgardsson_2017_AChE.md) | AChE activity biomarker turnover ← crystal violet | — | Allgardsson A et al., An Unusual Dimeric Inhibitor of Acetylc…, Molecules (Basel, Switzerla… (2017) | [10.3390/molecules22091433](https://doi.org/10.3390/molecules22091433) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:54 | 2:11 | 0/0/0 | 0/0/1 | 0/0/0 | 87,667/1,667 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 40 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agostini_2023 | irrelevant | 0 | 0 | The paper investigates the antifouling activity and toxicity of isonitrosoacetanilides, not the pharmacokinetics of methylrosaniline. |
| popPK | Allgardsson_2017 | irrelevant | 0 | 0 | The paper is an in-vitro structural and mechanistic study of crystal violet (a methylrosaniline derivative) binding to acetylcholinesterase, reporting IC50 and Hill coefficients rather than pharmacokinetic disposition parameters. |
| popPK | Almeida_2024 | irrelevant | 0 | 0 | The study investigates the antimicrobial and trypanocidal activities of a lectin (CrataBL) and does not involve methylrosaniline or pharmacokinetic modeling. |
| popPK | Berntssen_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of leuco crystal violet and leuco malachite green in Atlantic salmon, not methylrosaniline. |
| popPK | Fong_2017 | irrelevant | 0 | 0 | The paper investigates bacteriophage activity against Pseudomonas aeruginosa biofilms and contains no pharmacokinetic data for methylrosaniline. |
| popPK | Karim_2026 | irrelevant | 0 | 0 | The paper describes a microbiological assay for bacterial biofilms using crystal violet (methylrosaniline) as a stain, not a pharmacokinetic study of the drug. |
| popPK | Lim_2002 | irrelevant | 0 | 0 | The paper studies the effect of alphaMSH analogues on rat bones and does not involve methylrosaniline or pharmacokinetic parameters. |
| popPK | Mnisi_2024 | irrelevant | 0 | 0 | The paper investigates the antibacterial and antioxidant properties of plant extracts and does not involve methylrosaniline or pharmacokinetic modeling. |
| popPK | Nakada_2024 | irrelevant | 0 | 0 | The study investigates the photodynamic therapy efficacy of verteporfin in cancer cell lines and does not report pharmacokinetic parameters for methylrosaniline. |
| popPK | Nyström_2025 | irrelevant | 0 | 0 | The study evaluates the in vitro antiviral activity of remdesivir and sofosbuvir against tick-borne encephalitis virus, not the pharmacokinetics of methylrosaniline. |
| popPK | Okuda_2012 | irrelevant | 0 | 0 | The paper studies bacterial biofilm formation and is unrelated to the pharmacokinetics of methylrosaniline. |
| popPK | Okuda_2012_2 | irrelevant | 0 | 0 | The paper studies bacterial biofilm formation and is unrelated to the pharmacokinetics of methylrosaniline. |
| popPK | Taherkhani_2013 | irrelevant | 0 | 0 | The paper describes in vitro anti-rotaviral activity of a plant extract and contains no pharmacokinetic data for methylrosaniline. |
| popPK | Weldon_2001 | irrelevant | 0 | 0 | The paper is an in-vitro study on NF-kappa B-mediated chemoresistance in breast cancer cells and does not involve methylrosaniline or pharmacokinetic parameters. |
| popPK | Yang_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study for coronaviruses and does not contain any pharmacokinetic data for methylrosaniline. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
