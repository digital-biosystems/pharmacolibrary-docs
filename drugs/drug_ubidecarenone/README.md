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
| ubidecarenone | parent | 863.343 | C59H90O4 | DrugBank | [5281915](https://pubchem.ncbi.nlm.nih.gov/compound/5281915) | Tomono_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:46 | 0:54 | 0/1/0 | 0/0/0 | 0/0/0 | 49,019/2,153 | einfracz / qwen3.8-27b | 4 | 0/3 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), gpt-oss:120b (not confirmed, agreement 0.111). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Tomono_1986_reference](drugs/drug_ubidecarenone/Ubidecarenone_Tomono1986_reference.md) | — | 1-compartment (no model) | 2 | Tomono Y et al., Pharmacokinetic study of deuterium-labe…, International journal of cl… (1986) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ubidecarenone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: HMGCR (substrate), LDLR (substrate), NDUFV3 (cofactor), SDHA (cofactor), VLDLR (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 81 matched, 21 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tomono_1986.pdf` | Tomono Y et al., Pharmacokinetic study of deuterium-labe…, International journal of cl… (1986) | popPK | 9 | not captured | [3781673](https://pubmed.ncbi.nlm.nih.gov/3781673) | The study reports quantitative pharmacokinetic parameters (half-life, peak plasma concentration) for coenzyme Q10 (ubidecarenone) in humans. |
| `Zhou_1998.pdf` | Zhou Q et al., Accuracy of repeated blood sampling in…, Journal of pharmacological… (1998) | pd | 5 | [10.1016/s1056-8719(99)00005-2](https://doi.org/10.1016/s1056-8719(99)00005-2) | [10465153](https://www.ncbi.nlm.nih.gov/pubmed/10465153) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-14T23:46:34.968083+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adhikary_2026 | irrelevant | 0 | 0 | The paper is a narrative review on quinones in diabetes that does not report quantitative pharmacokinetic parameters for ubidecarenone (CoQ10), mentioning only qualitative issues like variable exposure. |
| popPK | Bhandari_2026 | irrelevant | 0 | 0 | The paper is a review of nanocarriers for Multiple Sclerosis and mentions Coenzyme Q10 (ubidecarenone) only as a cargo molecule, without reporting any quantitative pharmacokinetic parameters for the drug itself. |
| popPK | Bliznakov_1973 | irrelevant | 0 | 0 | The study investigates the immunomodulatory and anti-tumor effects of coenzyme Q10 in mice, reporting no pharmacokinetic parameters. |
| popPK | Chou_2023 | irrelevant | 0 | 0 | The paper studies the synthesis and in-vitro antioxidant/cell proliferation properties of acemannan, not the pharmacokinetics of ubidecarenone. |
| popPK | Folkers_1993 | irrelevant | 0 | 0 | The paper is a review of clinical outcomes and case histories regarding the therapeutic use of coenzyme Q10, containing no pharmacokinetic parameter estimates. |
| popPK | Iwamoto_1991 | irrelevant | 0 | 0 | The study focuses on the delivery kinetics of polysaccharide-coated oil droplets using Coenzyme Q10 as a radioactive marker, rather than reporting PK parameters for ubidecarenone as a therapeutic subject. |
| popPK | Khalifa_2020 | irrelevant | 0 | 0 | This is a preclinical toxicology study in rats investigating the protective effects of CoQ10 and ALA on cisplatin-induced nephrotoxicity, not a pharmacokinetic study of ubidecarenone. |
| popPK | Kitajima_1991 | irrelevant | 0 | 0 | The study focuses on gastric microcirculation and mucosal blood flow in stressed rats, not on the pharmacokinetic disposition (clearance, volume, half-life) of ubidecarenone. |
| popPK | Kose_2026 | irrelevant | 0 | 0 | The paper is a mechanistic cellular study using CoQ10 as a therapeutic compound in fibroblasts, containing no pharmacokinetic parameters. |
| popPK | Lei_2026 | irrelevant | 0 | 0 | no_text gate: only 161 chars of text extracted (&lt; 400) |
| PD | Luo_2022 | not_relevant | 0 | 0 | The paper studies Mogroside V, not ubidecarenone (CoQ10), and does not report a quantitative exposure-response or dose-response model with numeric PD parameters for the target drug. |
| popPK | Nilsson_2022 | irrelevant | 0 | 0 | The study investigates nutritional co-therapies (including CoQ10/ubidecarenone) in mouse models of Pompe disease but does not report pharmacokinetic parameters for ubidecarenone. |
| popPK | Porta_2026 | irrelevant | 0 | 0 | The study is a physiological investigation of blood pressure and renal function, not a pharmacokinetic study, and reports no PK parameters. |
| popPK | Sato_1988 | irrelevant | 0 | 0 | The study focuses on histological recovery and efficacy in guinea pigs, with no mention of quantitative pharmacokinetic parameter estimation for Coenzyme Q10. |
| popPK | Uner_2024 | irrelevant | 2 | 0 | The study focuses on the cellular uptake and nanotherapy of CoQ10 micelles in vitro, not on systemic or compartmental population pharmacokinetic parameters (CL, V, Q) for ubidecarenone. |
| popPK | Yasumoto_1986 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of coenzyme Q10 (ubidecarenone) on pulmonary function and chemical mediators during endotoxin shock, with no report of pharmacokinetic parameters. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The paper is a mechanistic review of mitochondrial dysfunction in sepsis focusing on thiamine, carnitine, and CoQ10, and does not contain quantitative pharmacokinetic parameters (CL, V, etc.) for ubidecarenone. |
| popPK | Zhou_1998 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:46 UTC</sub>
