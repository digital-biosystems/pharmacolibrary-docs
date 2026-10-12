<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;aztreonam&quot;}]"></div>

# aztreonam

- **generic name:** aztreonam
- **ATC codes:** `J01DF01`
- **DrugBank:** [DB00355](https://go.drugbank.com/drugs/DB00355) · **PubChem:** [CID 9568617](https://pubchem.ncbi.nlm.nih.gov/compound/9568617)
- **molar mass:** 435.433 g/mol (C13H17N5O8S2) — DrugBank
- **groups:** approved, investigational

## About

Aztreonam is a monobactam antibiotic used to treat infections caused by gram-negative bacteria, including Pseudomonas infections, urinary tract, skin, and respiratory infections, and it is inhaled for cystic fibrosis. It is an approved medicine included on the WHO essential medicines list, and a product for cystic fibrosis and respiratory tract infections is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418546](https://www.wikidata.org/wiki/Q418546) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aztreonam | parent | 435.433 | C13H17N5O8S2 | DrugBank | [9568617](https://pubchem.ncbi.nlm.nih.gov/compound/9568617) | Das_2024, Zhang_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:16 | 5:16 | 0/3/0 | 0/0/0 | 0/0/0 | 403,406/28,859 | einfracz / qwen3.8-27b | 11 | 3/8 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.545). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Barrasa_2024_reference](drugs/drug_aztreonam/Aztreonam_Barrasa2024_reference.md) | — | 2-compartment (no model) | 3 | Barrasa H et al., Optimizing Antibiotic Therapy for, Antibiotics (Basel, Switzer… (2024) | [10.3390/antibiotics13060553](https://doi.org/10.3390/antibiotics13060553) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Das_2024_reference](drugs/drug_aztreonam/Aztreonam_Das2024_reference.md) | — | 3-compartment (no model) | 11 (+10 cov.) | Das S et al., Dose selection for aztreonam-avibactam,…, European journal of clinica… (2024) | [10.1007/s00228-023-03609-x](https://doi.org/10.1007/s00228-023-03609-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2023_reference](drugs/drug_aztreonam/Aztreonam_Zhang2023_reference.md) | — | 1-compartment (no model) | 0 | Zhang J et al., Pharmacokinetic/Pharmacodynamic Evaluat…, Pharmaceutics (2023) | [10.3390/pharmaceutics15010251](https://doi.org/10.3390/pharmaceutics15010251) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 58 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Friedrich_1991.pdf` | Friedrich LV et al., Aztreonam pharmacokinetics in burn pati…, Antimicrobial agents and ch… (1991) | popPK | 10 | [10.1128/AAC.35.1.57](https://doi.org/10.1128/AAC.35.1.57) | [2014982](https://pubmed.ncbi.nlm.nih.gov/2014982) | Study reports PK parameters for aztreonam in humans, but specific numeric values for clearance, intercompartmental clearance, and half-life are not explicitly listed in the provided text, only volumes of distribution. |
| `Swabb_1983.pdf` | Swabb EA et al., Metabolism and pharmacokinetics of aztr…, Antimicrobial agents and ch… (1983) | popPK | 8 | [10.1128/AAC.24.3.394](https://doi.org/10.1128/AAC.24.3.394) | [6685455](https://pubmed.ncbi.nlm.nih.gov/6685455) | The study is a PK study of aztreonam in humans that reports half-lives and bioavailability but does not explicitly list the numeric values for clearance (CL) and volume (V). |

<sub>queue written 2026-10-07T10:11:58.266444+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrasa_2024 | irrelevant | 0 | 0 | The study uses literature-sourced PK parameters for Monte Carlo simulations of multiple drugs (including aztreonam) to determine PK/PD breakpoints but does not report original quantitative PK parameter values (e.g., CL, V, ka) for aztreonam in the text. |
| popPK | Chauzy_2019 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic modeling of MIC checkerboard data, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Friedrich_1991 | relevant | 10 | 4 | Study reports PK parameters for aztreonam in humans, but specific numeric values for clearance, intercompartmental clearance, and half-life are not explicitly listed in the provided text, only volumes of distribution. |
| popPK | Fromage_2026 | irrelevant | 2 | 2 | The study is a Monte Carlo simulation that implements a previously published PopPK model (Xie et al.) without reporting the model's quantitative structural parameters (CL, V, Q) in the text or evidence. |
| popPK | Goutelle_2023 | irrelevant | 1 | 0 | The paper is a PK/PD simulation study using literature data that reports probability of target attainment (PTA) and dosing recommendations, but does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) for aztreonam. |
| popPK | Kok_2025 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study of P. aeruginosa using aztreonam as an antimicrobial agent; it does not report pharmacokinetic parameters (CL, V, etc.) for aztreonam itself. |
| popPK | Kong_2026 | irrelevant | 0 | 0 | The study focuses on antimicrobial susceptibility (MICs) and in vivo antibacterial efficacy (survival/bacterial load) in insect and mouse models, not on pharmacokinetic parameters (CL, V, etc.) for aztreonam. |
| popPK | Kunz_2026 | irrelevant | 1 | 0 | This is a pharmacodynamic study using an in vitro hollow-fiber infection model with simulated dosing, not a study reporting quantitative pharmacokinetic parameters (CL, V, etc.) for aztreonam in a biological system. |
| popPK | Morales_2022 | irrelevant | 2 | 0 | This is a scoping review of beta-lactam therapeutic targets in pediatric sepsis; aztreonam is mentioned only briefly in a case report summary without reporting specific population PK parameters (CL, V) for aztreonam as the primary subject. |
| popPK | Nichols_2018 | irrelevant | 1 | 0 | The paper is a review of avibactam PK/PD targets and uses aztreonam only as a partner drug for context; it does not report original quantitative PK parameters for aztreonam. |
| popPK | Principe_2022 | relevant | 4 | 5 | The paper is a review that reports specific numeric PK parameters (Vd, Cl) for aztreonam in a Phase 2 trial context, but lacks a full compartmental model or population analysis for the drug alone. |
| popPK | Raber_2026 | relevant | 5 | 2 | Paper describes a population PK model for aztreonam-avibactam and cites general PK properties (half-life, Vd), but specific quantitative parameter estimates (CL, V, Q) for the final model are referenced as published elsewhere or in supplementary material not provided. |
| popPK | Swabb_1983 | relevant | 8 | 4 | The study is a PK study of aztreonam in humans that reports half-lives and bioavailability but does not explicitly list the numeric values for clearance (CL) and volume (V). |
| popPK | Xie_2025 | relevant | 10 | 4 | The paper reports a population PK model for aztreonam in humans, but the specific numeric parameter estimates (CL, Vc, etc.) are located in Table S3, which is not included in the provided evidence. |
| popPK | Yang_2026 | irrelevant | 3 | 0 | The paper is a simulation study using published models, and the specific numeric population parameter values (tvCL, tvV, etc.) are in Table S1 (supplementary) which is not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:12 UTC</sub>
