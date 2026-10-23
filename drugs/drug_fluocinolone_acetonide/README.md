<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;fluocinolone acetonide&quot;}]"></div>

# fluocinolone acetonide

- **generic name:** fluocinolone acetonide
- **ATC codes:** `C05AA10`, `D07AC04`, `D07BC02`, `D07CC02`, `S01BA15`, `S01CA10`, `S02BA08`, `S02CA05`
- **DrugBank:** [DB00591](https://go.drugbank.com/drugs/DB00591) · **PubChem:** [CID 6215](https://pubchem.ncbi.nlm.nih.gov/compound/6215)
- **molar mass:** 452.4882 g/mol (C24H30F2O6) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Fluocinolone acetonide is a potent corticosteroid used to reduce inflammation and itching, mainly in skin conditions, and also in preparations for haemorrhoids, eye and ear inflammation. It is an approved medicine, used in topical dermatological, rectal, ophthalmic and otological products, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q924467](https://www.wikidata.org/wiki/Q924467) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nehmé_2009_GR_binding](drugs/drug_fluocinolone_acetonide/pd_Nehm_2009_GR_binding.md) | GR binding affinity ← fluocinolone acetonide · direct sigmoid Emax (Hill) effect | — | Nehmé A et al., Glucocorticoids with different chemical…, BMC medical genomics (2009) | [10.1186/1755-8794-2-58](https://doi.org/10.1186/1755-8794-2-58) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nehmé_2009_GR_transactivation](drugs/drug_fluocinolone_acetonide/pd_Nehm_2009_GR_transactivation.md) | GR transactivation activity ← fluocinolone acetonide · direct sigmoid Emax (Hill) effect | — | Nehmé A et al., Glucocorticoids with different chemical…, BMC medical genomics (2009) | [10.1186/1755-8794-2-58](https://doi.org/10.1186/1755-8794-2-58) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zvidzayi_2021_AUEC](drugs/drug_fluocinolone_acetonide/pd_Zvidzayi_2021_AUEC.md) | skin blanching response ← fluocinolone acetonide · direct Emax (saturable) effect | — | Zvidzayi M et al., A Novel Approach to Assess the Potency…, Pharmaceutics (2021) | [10.3390/pharmaceutics13091456](https://doi.org/10.3390/pharmaceutics13091456) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fluocinolone_acetonide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ANXA1 (inducer), ANXA2 (inducer), ANXA3 (inducer), ANXA4 (inducer), ANXA5 (inducer), NR3C1 (target), PLA2G1B (inhibitor), SERPINA6 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:47 | 1:32 | 0/0/0 | 2/0/0 | 0/0/0 | 47,530/1,670 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/5 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `dArgy_1989.pdf` | d'Argy R et al., Effects of immunosuppressive chemicals…, Pharmacology & toxicology (1989) | pd | 4 | [10.1111/j.1600-0773.1989.tb00596.x](https://doi.org/10.1111/j.1600-0773.1989.tb00596.x) | [2755908](https://www.ncbi.nlm.nih.gov/pubmed/2755908) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T22:46:35.322095+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barar_2016 | irrelevant | 0 | 0 | The paper is a review of ocular drug delivery technologies and does not report any quantitative pharmacokinetic parameters for fluocinolone acetonide. |
| PD | Barar_2016 | not_relevant | 0 | 0 | The paper is a general review of ocular drug delivery technologies and does not report specific pharmacodynamic or exposure-response data for fluocinolone acetonide. |
| popPK | Chacun_2026 | irrelevant | 0 | 0 | The study evaluates the efficacy of selective laser trabeculoplasty for intraocular pressure control and does not report pharmacokinetic parameters for fluocinolone acetonide. |
| popPK | Hennein_2016 | irrelevant | 0 | 0 | The study is a clinical trial evaluating surgical outcomes (IOP, visual acuity) and does not report pharmacokinetic parameters for fluocinolone acetonide. |
| popPK | Hennings_1990 | irrelevant | 0 | 0 | The paper is an in vitro cell culture study on tumor promotion where fluocinolone acetonide is used only as a test inhibitor, with no pharmacokinetic parameters reported. |
| PD | Hennings_1990 | not_relevant | 1 | 0 | The paper mentions fluocinolone acetonide only as a qualitative inhibitor of colony formation in an in vitro model, without providing any numeric dose-response data, concentration-effect curves, or PD parameters for the drug. |
| popPK | Lax_2022 | irrelevant | 0 | 0 | The paper is a clinical review of topical corticosteroid strategies for eczema and does not report pharmacokinetic parameters for fluocinolone acetonide. |
| PD | Lax_2022 | not_relevant | 0 | 0 | The paper is a clinical systematic review comparing treatment strategies (potency, frequency, duration) and does not report pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for fluocinolone acetonide. |
| popPK | MARTINA_1965 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PD | MARTINA_1965 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Nehmé_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of gene expression and receptor binding in cell lines, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Queille-Roussel_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic vasoconstriction assay where fluocinolone acetonide serves only as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Queille-Roussel_2016 | not_relevant | 2 | 1 | The study reports comparative vasoconstriction AUCs for different formulations but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for fluocinolone acetonide. |
| popPK | Sen_2016 | irrelevant | 0 | 0 | The study reports visual acuity outcomes following cataract surgery, not pharmacokinetic parameters for fluocinolone acetonide. |
| popPK | Xie_2025 | irrelevant | 2 | 0 | The study focuses on formulation development and in vitro/in vivo release kinetics (pharmacodynamics) rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for fluocinolone acetonide. |
| PD | Xie_2025 | not_relevant | 2 | 1 | The paper describes a drug delivery formulation and qualitative in vivo efficacy (inflammation decrease) but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) for fluocinolone acetonide. |
| popPK | Yoon_2019 | irrelevant | 0 | 0 | The paper is a computational study on drug prioritization using biological networks and does not report any pharmacokinetic parameters for fluocinolone acetonide. |
| PD | Yoon_2019 | not_relevant | 0 | 0 | The paper describes a computational method for prioritizing functional drug actions using biological networks and SVMs, containing no pharmacokinetic or pharmacodynamic data for fluocinolone acetonide. |
| popPK | Zvidzayi_2021 | irrelevant | 0 | 0 | The study reports pharmacodynamic potency parameters (Emax, ED50) from a vasoconstrictor assay, not pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | dArgy_1989 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | dArgy_1989 | not_relevant | 0 | 0 | The paper studies the effects of immunosuppressive chemicals on foetal thymus organ cultures and does not report any pharmacodynamic or exposure-response data for fluocinolone acetonide. |
| popPK | Özen_2026 | irrelevant | 0 | 0 | The study evaluates clinical efficacy and anatomical outcomes (BCVA, CMT) of intravitreal implants, not pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
