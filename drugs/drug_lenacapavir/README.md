<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;lenacapavir&quot;}]"></div>

# lenacapavir

- **generic name:** lenacapavir
- **ATC codes:** `J05AX31`
- **DrugBank:** [DB15673](https://go.drugbank.com/drugs/DB15673) · **PubChem:** not captured
- **molar mass:** 968.28 g/mol (C39H32ClF10N7O5S2) — DrugBank
- **groups:** approved, investigational

## About

Lenacapavir is an antiviral medicine used to treat HIV-1 infection. It is authorised in the European Union and is also being investigated for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105981469](https://www.wikidata.org/wiki/Q105981469) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:47 | 1:12 | 0/0/0 | 1/0/0 | 0/0/0 | 124,839/1,260 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span> | [Vegas_2025_HIV_RNA](drugs/drug_lenacapavir/pd_Vegas_2025_HIV_RNA.md) | HIV-RNA biomarker turnover ← lenacapavir | — | Vegas Rodriguez A et al., Integrated Population Pharmacokinetic-p…, The AAPS journal (2025) | [10.1208/s12248-025-01136-4](https://doi.org/10.1208/s12248-025-01136-4) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=lenacapavir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Canales_2025 | irrelevant | 4 | 2 | The paper is a medicinal chemistry discovery review that primarily reports in vitro/in silico parameters (predCL, EC50) and qualitative PK characteristics, rather than providing a quantitative population-PK model with CL/V/Q values for lenacapavir. |
| popPK | Jogiraju_2025 | relevant | 3 | 5 | The study reports non-compartmental pharmacokinetic parameters (Cmax, AUC, Ctrough, Tmax) for lenacapavir in humans, but does not report specific disposition parameters like clearance (CL), volume of distribution (V), or half-life, nor does it provide a compartmental or population-PK model. |
| popPK | Margot_2021 | irrelevant | 0 | 0 | The study reports in-vitro virological susceptibility (EC50) data for HIV mutants, not pharmacokinetic parameters (CL, V, ka) for lenacapavir. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper focuses on the design of new benzothiazole HIV capsid modulators, and lenacapavir is only mentioned as a comparator for ligand efficiency, with no PK parameters for lenacapavir reported. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study focuses on a novel compound (IC-2i) with lenacapavir only mentioned as a control for activity comparison, not as the subject of PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
