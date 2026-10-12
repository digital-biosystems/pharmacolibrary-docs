<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefdinir&quot;}]"></div>

# cefdinir

- **generic name:** cefdinir
- **ATC codes:** `J01DD15`
- **DrugBank:** [DB00535](https://go.drugbank.com/drugs/DB00535) · **PubChem:** [CID 6915944](https://pubchem.ncbi.nlm.nih.gov/compound/6915944)
- **molar mass:** 395.414 g/mol (C14H13N5O5S2) — DrugBank
- **groups:** approved, investigational

## About

Cefdinir is a third-generation cephalosporin antibiotic used to treat bacterial infections such as bronchitis, sinusitis, tonsillitis, otitis media, pharyngitis, and pneumonia. It is an approved antibiotic that is widely used, mainly for respiratory and other common bacterial infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1453445](https://www.wikidata.org/wiki/Q1453445) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:19 | 1:15 | 0/0/0 | 2/0/0 | 0/0/0 | 99,008/2,105 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">other organism</span> | [Gumbo_2020_cfu_mL](drugs/drug_cefdinir/pd_Gumbo_2020_cfu_mL.md) | Mycobacterium abscessus subspecies abscessus (Mab) viability ← cefdinir · direct sigmoid Emax (Hill) effect | — | Gumbo T et al., Repurposing drugs for treatment of Myco…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkz523](https://doi.org/10.1093/jac/dkz523) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Srivastava_2021_CFU](drugs/drug_cefdinir/pd_Srivastava_2021_CFU.md) | colony forming unit (CFU) ← cefdinir · direct sigmoid Emax (Hill) effect | — | Srivastava S et al., Cefdinir and β-Lactamase Inhibitor Inde…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.677005](https://doi.org/10.3389/fphar.2021.677005) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cefdinir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | `SLC22A5` inhibitor | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `SLC15A1` inhibitor/substrate, `SLC22A5` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC15A2` inhibitor, `SLC22A6` substrate, `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: MPO (inhibitor), Peptidoglycan transpeptidase (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Motohiro_1990.pdf` | Motohiro T et al., [Pharmacokinetics and clinical effects…, The Japanese journal of ant… (1990) | popPK | 8 | not captured | [2086819](https://pubmed.ncbi.nlm.nih.gov/2086819) | The paper reports pediatric PK parameters (Cmax, t1/2, AUC) for cefdinir, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text, only half-life and AUC. |

<sub>queue written 2026-10-07T10:19:01.364648+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Nakazawa_1990 | irrelevant | 3 | 0 | The paper reports clinical efficacy and basic plasma/urine levels (Cmax, Tmax, AUC proxy via excretion) but does not provide calculated population pharmacokinetic parameters such as clearance (CL), volume of distribution (V), or rate constants (ka, ke) derived from a compartmental model. |
| popPK | Peric_2003 | irrelevant | 2 | 0 | This is a microbiology/susceptibility study that uses published PK/PD breakpoints to assess antimicrobial activity, rather than a pharmacokinetic study reporting original quantitative disposition parameters for cefdinir. |
| popPK | Srivastava_2022 | irrelevant | 0 | 0 | This is an in vitro antimicrobial efficacy study (MIC and time-kill) against Mycobacterium kansasii, not a pharmacokinetic study reporting disposition parameters for cefdinir. |
| popPK | Torumkuney_2020 | irrelevant | 0 | 0 | The study reports antibiotic susceptibility data (MICs/breakpoints) for respiratory pathogens, not population pharmacokinetic parameters for cefdinir. |
| popPK | Torumkuney_2020_2 | irrelevant | 0 | 0 | This is a surveillance study reporting antibiotic susceptibility (MICs) of pathogens, not a pharmacokinetic study of cefdinir. |
| popPK | Torumkuney_2025 | irrelevant | 0 | 0 | The paper is an antimicrobial susceptibility surveillance study (MICs) and does not report pharmacokinetic disposition parameters for cefdinir. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
