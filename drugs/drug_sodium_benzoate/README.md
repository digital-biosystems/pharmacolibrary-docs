<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;sodium benzoate&quot;}]"></div>

# sodium benzoate

- **generic name:** sodium benzoate
- **ATC codes:** `A16AX11`, `A16AX30`, `V04CG30`
- **DrugBank:** [DB03793](https://go.drugbank.com/drugs/DB03793) · **PubChem:** [CID 243](https://pubchem.ncbi.nlm.nih.gov/compound/243)
- **molar mass:** 122.123 g/mol (C7H6O2) — DrugBank
- **groups:** approved, investigational

## About

Sodium benzoate is a benzoic acid salt used as a medicine for various metabolic conditions and as a diagnostic agent in tests for gastric secretion. It is an approved drug, and it also acts as an antifungal agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423971](https://www.wikidata.org/wiki/Q423971) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| benzoic acid | parent | 122.123 | C7H6O2 | DrugBank | [243](https://pubchem.ncbi.nlm.nih.gov/compound/243) | Kubota_1991 |
| hippuric acid | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:33 | 1:01 | 0/1/0 | 0/0/0 | 0/0/0 | 36,193/561 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Kubota_1991_reference](drugs/drug_sodium_benzoate/SodiumBenzoate_Kubota1991_reference.md) | — | nonlinear / manual (no model) | 1 | Kubota K et al., Dose-dependent pharmacokinetics of benz…, European journal of clinica… (1991) | [10.1007/BF00314969](https://doi.org/10.1007/BF00314969) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sodium_benzoate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC15A1` unknown, `SLCO2B1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DAO (unknown), RAB9A (inhibitor), SLC16A1 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 9 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kubota_1991.pdf` | Kubota K et al., Dose-dependent pharmacokinetics of benz…, European journal of clinica… (1991) | popPK | 9 | [10.1007/BF00314969](https://doi.org/10.1007/BF00314969) | [1804654](https://pubmed.ncbi.nlm.nih.gov/1804654) | The study reports a compartmental PK model for benzoic acid (metabolite of sodium benzoate) in humans, but specific numeric parameter values (CL, V, ka, Km, Vmax) are not explicitly listed in the provided text, only AUC ratios and Vmax ranges. |
| `MacArthur_2004.pdf` | MacArthur RB et al., Pharmacokinetics of sodium phenylacetat…, Molecular genetics and meta… (2004) | popPK | 9 | [10.1016/j.ymgme.2003.12.011](https://doi.org/10.1016/j.ymgme.2003.12.011) | [15050977](https://pubmed.ncbi.nlm.nih.gov/15050977) | The study reports pharmacokinetics for sodium benzoate in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Endo_2023.pdf` | Endo F et al., Pharmacokinetics, safety, and tolerabil…, Drug metabolism and pharmac… (2023) | popPK | 8 | [10.1016/j.dmpk.2022.100474](https://doi.org/10.1016/j.dmpk.2022.100474) | [36529053](https://pubmed.ncbi.nlm.nih.gov/36529053) | The study reports the pharmacokinetics of sodium benzoate in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Esimbekova_2017.pdf` | Esimbekova EN et al., Inhibition effect of food preservatives…, Food chemistry (2017) | pd | 5 | [10.1016/j.foodchem.2017.05.059](https://doi.org/10.1016/j.foodchem.2017.05.059) | [28554639](https://www.ncbi.nlm.nih.gov/pubmed/28554639) | metadata signals extractable PD data (EC50) |
| `Gartiser_2007.pdf` | Gartiser S et al., Anaerobic inhibition and biodegradation…, Chemosphere (2007) | pd | 5 | [10.1016/j.chemosphere.2006.08.040](https://doi.org/10.1016/j.chemosphere.2006.08.040) | [17097129](https://www.ncbi.nlm.nih.gov/pubmed/17097129) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-05T11:33:02.613870+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Althubyani_2025 | irrelevant | 0 | 0 | The study is a cytogenetic and genotoxicity assay in Allium cepa (onion) roots, not a pharmacokinetic study, and reports no disposition parameters for sodium benzoate. |
| popPK | DeGraves_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of caffeine (dosed as caffeine sodium benzoate) in dairy cows, not sodium benzoate itself. |
| popPK | Endo_2023 | relevant | 8 | 2 | The study reports the pharmacokinetics of sodium benzoate in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Esimbekova_2017 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| PD | Esimbekova_2017 | not_relevant | 1 | 0 | In vitro enzyme-inhibition study of preservatives; no in vivo exposure-response or dose-effect PD relationship for sodium benzoate with extractable PD parameters. |
| popPK | Gartiser_2007 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | Gartiser_2007 | not_relevant | 0 | 0 | Paper is about anaerobic biodegradation of antibiotics in ISO test schemes; no sodium benzoate PD or exposure-response data. |
| popPK | Kubota_1991 | relevant | 9 | 2 | The study reports a compartmental PK model for benzoic acid (metabolite of sodium benzoate) in humans, but specific numeric parameter values (CL, V, ka, Km, Vmax) are not explicitly listed in the provided text, only AUC ratios and Vmax ranges. |
| popPK | MacArthur_2004 | relevant | 9 | 2 | The study reports pharmacokinetics for sodium benzoate in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Tunstall_1995 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of membrane capacitance in guinea-pig cochlear cells, not a pharmacokinetic study of sodium benzoate. |
| PD | Tunstall_1995 | not_relevant | 2 | 2 | Sodium benzoate is tested at only a single concentration (10 mM) with a mean effect (−9.2 ± 3.2 pF capacitance; −0.25 nA current); no dose-response curve or PD parameters (Emax, EC50, slope) are reported or derivable for benzoate — the Hill fit applies to salicylate. |
| popPK | Zurita_2007 | irrelevant | 0 | 0 | The study investigates the toxicology of indium nitrate, using sodium benzoate only as a modulator to test oxidative stress mechanisms, not as a subject drug for PK analysis. |
| PD | Zurita_2007 | not_relevant | 1 | 0 | Sodium benzoate is only used as a mechanistic modulator in a cell-line toxicity assay; no concentration-effect or dose-response PD relationship for sodium benzoate is reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 11:32 UTC</sub>
