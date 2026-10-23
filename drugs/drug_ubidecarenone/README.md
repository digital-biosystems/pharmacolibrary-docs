<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;ubidecarenone&quot;}]"></div>

# ubidecarenone

- **generic name:** ubidecarenone
- **ATC codes:** `C01EB09`
- **DrugBank:** [DB09270](https://go.drugbank.com/drugs/DB09270) · **PubChem:** [CID 5281915](https://pubchem.ncbi.nlm.nih.gov/compound/5281915)
- **molar mass:** 863.3435 g/mol (C59H90O4) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

It is approved and also sold as a nutraceutical supplement, but it is not an authorised EU medicine and its use is mainly as a dietary supplement rather than a mainstream drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q321285](https://www.wikidata.org/wiki/Q321285) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| coenzyme Q10 (ubidecarenone) | parent | 863.343 | C59H90O4 | DrugBank | [5281915](https://pubchem.ncbi.nlm.nih.gov/compound/5281915) | Tomono_1986 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Tomono_1986_reference](drugs/drug_ubidecarenone/Ubidecarenone_Tomono1986_reference.md) | — | 1-compartment (no model) | 2 | Tomono Y et al., Pharmacokinetic study of deuterium-labe…, International journal of cl… (1986) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ubidecarenone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HMGCR (substrate), LDLR (substrate), NDUFV3 (cofactor), SDHA (cofactor), VLDLR (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 11:50 | 3:05 | 0/1/0 | 0/0/0 | 0/0/0 | 49,380/6,089 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/3 | 3/1 | 0 |

## Coverage

- **PubMed hits:** 81 matched, 21 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tomono_1986.pdf` | Tomono Y et al., Pharmacokinetic study of deuterium-labe…, International journal of cl… (1986) | popPK | 10 | not captured | [3781673](https://pubmed.ncbi.nlm.nih.gov/3781673) | The study reports quantitative PK parameters (Cmax, Tmax, t1/2) and a compartmental model for coenzyme Q10 (ubidecarenone) in humans. |
| `Zhou_1998.pdf` | Zhou Q et al., Accuracy of repeated blood sampling in…, Journal of pharmacological… (1998) | pd | 5 | [10.1016/s1056-8719(99)00005-2](https://doi.org/10.1016/s1056-8719(99)00005-2) | [10465153](https://www.ncbi.nlm.nih.gov/pubmed/10465153) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-06T11:48:54.404799+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adhikary_2026 | irrelevant | 0 | 0 | The paper is a narrative review of quinones (including CoQ10/ubidecarenone) in diabetes, focusing on mechanisms and general pharmaceutical perspectives, without reporting specific quantitative PK parameter values for ubidecarenone. |
| popPK | Bhandari_2026 | irrelevant | 0 | 0 | The paper is a review of nanocarriers for Multiple Sclerosis and does not report quantitative pharmacokinetic parameters for ubidecarenone. |
| popPK | Bliznakov_1973 | irrelevant | 0 | 0 | The study investigates the immunological and anti-tumor effects of coenzyme Q10 (ubidecarenone) in mice, not its pharmacokinetic parameters. |
| popPK | Chou_2023 | irrelevant | 0 | 0 | The study focuses on the in vitro antioxidant and wound-healing properties of acemannan, with CoQ10 (ubidecarenone) used only as a comparator in radical scavenging assays, and no pharmacokinetic parameters are reported. |
| popPK | Folkers_1993 | irrelevant | 0 | 0 | The paper is a clinical review/case report on survival and immune effects, containing no pharmacokinetic parameters or quantitative disposition data for ubidecarenone. |
| popPK | Iwamoto_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polysaccharide-coated oil droplets (carriers) using Coenzyme Q10 as a radiolabeled marker, rather than reporting quantitative PK parameters for ubidecarenone itself. |
| popPK | Khalifa_2020 | irrelevant | 0 | 0 | The study is a toxicology/efficacy trial in rats measuring renal function and antioxidant markers, not a pharmacokinetic study reporting disposition parameters for ubidecarenone. |
| popPK | Kitajima_1991 | irrelevant | 0 | 0 | The study investigates gastric microcirculation and the role of CoQ10 (ubidecarenone) as a vascular regulating factor in rats, not the pharmacokinetic disposition parameters of the drug. |
| popPK | Kose_2026 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial function in Cockayne syndrome fibroblasts using CoQ10 as a therapeutic agent, and it does not report any pharmacokinetic parameters for ubidecarenone. |
| popPK | Lei_2026 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Luo_2022 | not_relevant | 0 | 0 | The paper studies Mogroside V, not ubidecarenone (CoQ10), and does not report a quantitative exposure-response or dose-response model with numeric PD parameters for the target drug. |
| popPK | Nilsson_2022 | irrelevant | 0 | 0 | The study focuses on nutritional co-therapy (1,3-butanediol and antioxidants) for Pompe disease in mice and does not report pharmacokinetic parameters for ubidecarenone. |
| popPK | Porta_2026 | irrelevant | 0 | 0 | The study investigates the physiological effects of CoQ10 on blood pressure and renal function in rats, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| popPK | Sato_1988 | irrelevant | 0 | 0 | The study focuses on histological and functional recovery of hearing in guinea pigs, not on quantitative pharmacokinetic parameters (CL, V, etc.) for ubidecarenone. |
| popPK | Uner_2024 | irrelevant | 0 | 0 | The study focuses on in vitro cellular uptake and mitochondrial targeting of CoQ10 micelles, not on quantitative population pharmacokinetic parameters (CL, V, etc.) for ubidecarenone. |
| popPK | Yasumoto_1986 | irrelevant | 0 | 0 | The study investigates the physiological effects of coenzyme Q10 (ubidecarenone) on endotoxin shock in dogs, not its pharmacokinetic disposition parameters. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The paper is a mechanistic review of mitochondrial dysfunction in sepsis and does not report pharmacokinetic parameters for ubidecarenone. |
| popPK | Zhou_1998 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 11:49 UTC</sub>
