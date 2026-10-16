<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;tinzaparin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tinzaparin_Barrett2001_reference&quot;,&quot;label&quot;:&quot;Barrett_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tinzaparin/Tinzaparin_Barrett2001_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# tinzaparin

- **generic name:** tinzaparin
- **ATC codes:** `B01AB10`
- **DrugBank:** [DB06822](https://go.drugbank.com/drugs/DB06822) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tinzaparin is a low molecular weight heparin used as an anticoagulant, including in the treatment of pulmonary embolism. It is an approved medication and remains in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817252](https://www.wikidata.org/wiki/Q20817252) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:25 | 0:51 | 0/2/2 | 1/0/0 | 0/0/0 | 44,483/3,395 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Barrett_2001_reference](drugs/drug_tinzaparin/Tinzaparin_Barrett2001_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Barrett JS et al., Population pharmacodynamics in patients…, International journal of cl… (2001) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727), gpt-oss:120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Gouin-Thibault_2024_reference](drugs/drug_tinzaparin/Tinzaparin_GouinThibault2024_reference.md) | — | 1-compartment (no model) | 4 | Gouin-Thibault I et al., Tinzaparin, an alternative to subcutane…, Journal of thrombosis and h… (2024) | [10.1016/j.jtha.2024.07.006](https://doi.org/10.1016/j.jtha.2024.07.006) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Brindley_1993_reference](drugs/drug_tinzaparin/Tinzaparin_Brindley1993_reference.md) | — | 1-compartment (no model) | 0 | Brindley CJ et al., Relationship between pharmacokinetics a…, Xenobiotica; the fate of fo… (1993) | [10.3109/00498259309059396](https://doi.org/10.3109/00498259309059396) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4), gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Johansen_1994_reference](drugs/drug_tinzaparin/Tinzaparin_Johansen1994_reference.md) | — | 1-compartment (no model) | 0 | Johansen PB et al., Pharmacokinetics of tinzaparin (Logipar…, Thrombosis research (1994) | [10.1016/0049-3848(94)90260-7](https://doi.org/10.1016/0049-3848(94)90260-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Brindley_1993_E](drugs/drug_tinzaparin/pd_Brindley_1993_E.md) | anticoagulant effect ← tinzaparin · direct sigmoid Emax (Hill) effect | — | Brindley CJ et al., Relationship between pharmacokinetics a…, Xenobiotica; the fate of fo… (1993) | [10.3109/00498259309059396](https://doi.org/10.3109/00498259309059396) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tinzaparin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | adipose tissue | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ADAMTS4 (inhibitor), CXCL12 (binder), ITGA4 (inhibitor), SERPINC1 (potentiator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Delavenne_2025.pdf` | Delavenne X et al., Tinzaparin Pharmacokinetics in Patients…, Thrombosis and haemostasis (2025) | popPK | 10 | [10.1055/a-2740-1841](https://doi.org/10.1055/a-2740-1841) | [41290197](https://pubmed.ncbi.nlm.nih.gov/41290197) | The paper describes a population PK model for tinzaparin but provides only qualitative descriptions of covariate associations and structural model choice in the evidence, with no specific numeric parameter values (CL, V, etc.) listed. |
| `Barrett_2001.pdf` | Barrett JS et al., Population pharmacodynamics in patients…, International journal of cl… (2001) | popPK | 9 | not captured | [11680668](https://pubmed.ncbi.nlm.nih.gov/11680668) | The study reports quantitative population parameters for tinzaparin including clearance, volume of distribution, and half-life. |
| `Brindley_1993.pdf` | Brindley CJ et al., Relationship between pharmacokinetics a…, Xenobiotica; the fate of fo… (1993) | popPK | 9 | [10.3109/00498259309059396](https://doi.org/10.3109/00498259309059396) | [8212732](https://pubmed.ncbi.nlm.nih.gov/8212732) | The study reports quantitative PK/PD parameters (EC50 values, absorption duration, renal excretion) for tinzaparin in dogs, with specific numeric values for efficacy constants provided in the text, though full compartmental PK parameters may be limited or in figures. |
| `Johansen_1994.pdf` | Johansen PB et al., Pharmacokinetics of tinzaparin (Logipar…, Thrombosis research (1994) | popPK | 9 | [10.1016/0049-3848(94)90260-7](https://doi.org/10.1016/0049-3848(94)90260-7) | [7997983](https://pubmed.ncbi.nlm.nih.gov/7997983) | The study reports pharmacokinetic modeling (3-compartment) and half-lives for tinzaparin in rats, but does not provide specific clearance (CL) or volume (V) values. |
| `Kuhle_2005.pdf` | Kuhle S et al., Dose-finding and pharmacokinetics of th…, Thrombosis and haemostasis (2005) | popPK | 9 | [10.1160/TH05-03-0215](https://doi.org/10.1160/TH05-03-0215) | [16411388](https://pubmed.ncbi.nlm.nih.gov/16411388) | The study describes a population pharmacokinetic analysis of tinzaparin in humans and reports qualitative trends (e.g., younger children cleared tinzaparin more rapidly), but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| `Hainer_2002.pdf` | Hainer JW et al., Intravenous and subcutaneous weight-bas…, American journal of kidney… (2002) | popPK | 5 | [10.1053/ajkd.2002.34911](https://doi.org/10.1053/ajkd.2002.34911) | [12200805](https://pubmed.ncbi.nlm.nih.gov/12200805) | The paper reports half-lives and mentions reduced clearance for tinzaparin in humans, but lacks a full compartmental PK model or specific volume parameters. |

<sub>queue written 2026-10-14T18:24:32.489181+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delavenne_2025 | relevant | 10 | 0 | The paper describes a population PK model for tinzaparin but provides only qualitative descriptions of covariate associations and structural model choice in the evidence, with no specific numeric parameter values (CL, V, etc.) listed. |
| popPK | Johansen_1994 | relevant | 9 | 2 | The study reports pharmacokinetic modeling (3-compartment) and half-lives for tinzaparin in rats, but does not provide specific clearance (CL) or volume (V) values. |
| popPK | Kuhle_2005 | relevant | 9 | 2 | The study describes a population pharmacokinetic analysis of tinzaparin in humans and reports qualitative trends (e.g., younger children cleared tinzaparin more rapidly), but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:24 UTC</sub>
