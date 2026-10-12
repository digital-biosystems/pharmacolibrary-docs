<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;rufloxacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Rufloxacin_Imbimbo1991_reference&quot;,&quot;label&quot;:&quot;Imbimbo_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rufloxacin/Rufloxacin_Imbimbo1991_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Rufloxacin_Mattina1991_reference&quot;,&quot;label&quot;:&quot;Mattina_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_rufloxacin/Rufloxacin_Mattina1991_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# rufloxacin

- **generic name:** rufloxacin
- **ATC codes:** `J01MA10`
- **DrugBank:** [DB13772](https://go.drugbank.com/drugs/DB13772) · **PubChem:** not captured
- **molar mass:** 363.407 g/mol (C17H18FN3O3S) — DrugBank
- **groups:** investigational

## About

Rufloxacin is a fluoroquinolone antibacterial that was developed to treat bacterial infections. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3942356](https://www.wikidata.org/wiki/Q3942356) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| rufloxacin | parent | 363.407 | C17H18FN3O3S | DrugBank | — | Mattina_1991, Perry_1993, Triger_1993 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:02 | 6:46 | 0/0/4 | 0/0/0 | 0/0/0 | 135,172/44,252 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.467). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Imbimbo_1991_reference](drugs/drug_rufloxacin/Rufloxacin_Imbimbo1991_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Imbimbo BP et al., Inter- and intrasubject variabilities i…, Antimicrobial agents and ch… (1991) | [10.1128/AAC.35.2.390](https://doi.org/10.1128/AAC.35.2.390) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.133). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Mattina_1991_reference](drugs/drug_rufloxacin/Rufloxacin_Mattina1991_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Mattina R et al., Pharmacokinetics of rufloxacin in healt…, Chemotherapy (1991) | [10.1159/000238885](https://doi.org/10.1159/000238885) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Perry_1993_reference](drugs/drug_rufloxacin/Rufloxacin_Perry1993_reference.md) | — | 1-compartment (no model) | 2 | Perry G et al., Pharmacokinetics of rufloxacin in patie…, Antimicrobial agents and ch… (1993) | [10.1128/AAC.37.4.637](https://doi.org/10.1128/AAC.37.4.637) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Triger_1993_reference](drugs/drug_rufloxacin/Rufloxacin_Triger1993_reference.md) | — | 1-compartment (no model) | 5 | Triger DR et al., Multiple-dose pharmacokinetics of ruflo…, Hepatology (Baltimore, Md.) (1993) | [10.1002/hep.1840180415](https://doi.org/10.1002/hep.1840180415) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mattina_1991.pdf` | Mattina R et al., Pharmacokinetics of rufloxacin in healt…, Chemotherapy (1991) | popPK | 10 | [10.1159/000238885](https://doi.org/10.1159/000238885) | [1662127](https://pubmed.ncbi.nlm.nih.gov/1662127) | The study reports comprehensive quantitative PK parameters (CL, Vd, t1/2, ka) for rufloxacin in humans, with all numeric values present in the abstract. |
| `Triger_1993.pdf` | Triger DR et al., Multiple-dose pharmacokinetics of ruflo…, Hepatology (Baltimore, Md.) (1993) | popPK | 10 | [10.1002/hep.1840180415](https://doi.org/10.1002/hep.1840180415) | [8406358](https://pubmed.ncbi.nlm.nih.gov/8406358) | The abstract provides explicit quantitative pharmacokinetic parameters (clearance, half-life, AUC) for rufloxacin in humans. |
| `Cogo_1992.pdf` | Cogo R et al., Steady-state pharmacokinetics of ruflox…, Therapeutic drug monitoring (1992) | popPK | 5 | [10.1097/00007691-199202000-00006](https://doi.org/10.1097/00007691-199202000-00006) | [1312263](https://pubmed.ncbi.nlm.nih.gov/1312263) | The paper reports quantitative PK parameters for rufloxacin in humans, specifically elimination half-life, Cmax, Tmax, and AUC, which are consistent with the requirements for a population PK study despite the lack of explicit clearance or volume values. |

<sub>queue written 2026-10-07T11:55:29.914034+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cogo_1992 | relevant | 5 | 3 | The paper reports quantitative PK parameters for rufloxacin in humans, specifically elimination half-life, Cmax, Tmax, and AUC, which are consistent with the requirements for a population PK study despite the lack of explicit clearance or volume values. |
| popPK | Kinzig-Schippers_1998 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for theophylline to assess a drug interaction, but does not provide quantitative PK disposition parameters (CL, V, etc.) for rufloxacin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:57 UTC</sub>
