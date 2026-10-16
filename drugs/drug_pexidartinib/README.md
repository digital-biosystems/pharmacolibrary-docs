<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pexidartinib&quot;}]"></div>

# pexidartinib

- **generic name:** pexidartinib
- **ATC codes:** `L01EX15`, `L01XE`
- **DrugBank:** [DB12978](https://go.drugbank.com/drugs/DB12978) · **PubChem:** [CID 25151352](https://pubchem.ncbi.nlm.nih.gov/compound/25151352)
- **molar mass:** 417.82 g/mol (C20H15ClF3N5) — DrugBank
- **groups:** approved, investigational

## About

Pexidartinib is a protein kinase inhibitor used to treat tenosynovial giant cell tumour of the tendon sheath (pigmented villonodular synovitis). It is approved in the United States but its use is restricted, carrying a boxed warning for liver injury; a marketing application in the European Union was refused.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25100640](https://www.wikidata.org/wiki/Q25100640) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pexidartinib | parent | 417.82 | C20H15ClF3N5 | DrugBank | [25151352](https://pubchem.ncbi.nlm.nih.gov/compound/25151352) | Yin_2021 |
| ZAAD | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:43 | 3:45 | 0/1/1 | 1/0/0 | 0/0/0 | 131,237/11,684 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.267). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Yin_2021_pexidartinib](drugs/drug_pexidartinib/Pexidartinib_Yin2021_pexidartinib.md) | — | parent + metabolite (no model) | 2 | Yin O et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1753](https://doi.org/10.1002/jcph.1753) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Yin_2021_estimate_a](drugs/drug_pexidartinib/Pexidartinib_Yin2021_estimate_a.md) | — | parent + metabolite (no model) | 2 | Yin O et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1753](https://doi.org/10.1002/jcph.1753) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yin_2021_2_AST](drugs/drug_pexidartinib/pd_Yin_2021_2_AST.md) | Time to first AST &gt;3× upper limit of normal (ULN) ← pexidartinib · direct log-linear effect | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yin_2021_2_ALT](drugs/drug_pexidartinib/pd_Yin_2021_2_ALT.md) | Time to first ALT &gt;3× upper limit of normal (ULN) ← pexidartinib · direct log-linear effect | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Yin_2021_2_ORR](drugs/drug_pexidartinib/pd_Yin_2021_2_ORR.md) | overall response rate by RECIST ← pexidartinib · categorical (graded) response model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Yin_2021_2_RECIST](drugs/drug_pexidartinib/pd_Yin_2021_2_RECIST.md) | longitudinal tumor size by RECIST ← pexidartinib · disease-progression model | — | Yin O et al., Exposure-response analysis of efficacy…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12712](https://doi.org/10.1002/psp4.12712) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pexidartinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` inhibitor | DrugBank actor |
| absorption | small intestine | `SLCO2B1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer/inhibitor, `CYP2C9` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inhibitor, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CSF1R (inhibitor), FLT3 (inhibitor), KIT (inhibitor), PDGFRB (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boal_2020.pdf` | Boal LH et al., Pediatric PK/PD Phase I Trial of Pexida…, Clinical cancer research :… (2020) | popPK | 8 | [10.1158/1078-0432.CCR-20-1696](https://doi.org/10.1158/1078-0432.CCR-20-1696) | [32943455](https://pubmed.ncbi.nlm.nih.gov/32943455) | The study is a pediatric PK/PD trial of pexidartinib that reports population pharmacokinetics, but the abstract provided does not contain the specific numeric parameter values (CL, V, etc.), which are likely in the main text or figures. |

<sub>queue written 2026-10-14T20:40:28.038838+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boal_2020 | relevant | 8 | 2 | The study is a pediatric PK/PD trial of pexidartinib that reports population pharmacokinetics, but the abstract provided does not contain the specific numeric parameter values (CL, V, etc.), which are likely in the main text or figures. |
| popPK | Yin_2021_2 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses pexidartinib exposure metrics (Cavg) to predict efficacy and safety, but it does not report the structural population pharmacokinetic parameter estimates (CL, V, etc.) for pexidartinib. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:40 UTC</sub>
