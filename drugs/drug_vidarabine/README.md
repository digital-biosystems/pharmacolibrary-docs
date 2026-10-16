<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;vidarabine&quot;}]"></div>

# vidarabine

- **generic name:** vidarabine
- **ATC codes:** `J05AB03`, `S01AD06`
- **DrugBank:** [DB00194](https://go.drugbank.com/drugs/DB00194) · **PubChem:** [CID 21704](https://pubchem.ncbi.nlm.nih.gov/compound/21704)
- **molar mass:** 267.2413 g/mol (C10H13N5O4) — DrugBank
- **groups:** approved, withdrawn

## About

Vidarabine is an antiviral drug that was used to treat herpes simplex infections, including herpes simplex keratitis of the eye. It has been withdrawn from use, having been largely replaced by newer antiviral medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415107](https://www.wikidata.org/wiki/Q415107) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vidarabine (vidarabine (Ara-A)) | parent | 267.241 | C10H13N5O4 | DrugBank | [21704](https://pubchem.ncbi.nlm.nih.gov/compound/21704) | Yang_1992 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:59 | 7:27 | 0/1/0 | 2/0/0 | 0/0/0 | 144,283/41,308 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Yang_1992_reference](drugs/drug_vidarabine/Vidarabine_Yang1992_reference.md) | — | 1-compartment (no model) | 3 | Yang TY et al., [Studies on pharmacokinetics of 9-beta-…, Yao xue xue bao = Acta phar… (1992) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rabie_2023_EC50](drugs/drug_vidarabine/pd_Rabie_2023_EC50.md) | 50%Reduction in Infectious Virus ← vidarabine · direct sigmoid Emax (Hill) effect | — | Rabie AM et al., Evaluation of a series of nucleoside an…, Medicinal chemistry researc… (2023) | [10.1007/s00044-022-02970-3](https://doi.org/10.1007/s00044-022-02970-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rabie_2023_EC50_2](drugs/drug_vidarabine/pd_Rabie_2023_EC50_2.md) | 50% Reduction in Viral RNA Copy ← vidarabine · direct sigmoid Emax (Hill) effect | — | Rabie AM et al., Evaluation of a series of nucleoside an…, Medicinal chemistry researc… (2023) | [10.1007/s00044-022-02970-3](https://doi.org/10.1007/s00044-022-02970-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Rabie_2023_RdRp](drugs/drug_vidarabine/pd_Rabie_2023_RdRp.md) | Inhibition of SARS-CoV-2 RdRp in vitro ← vidarabine · inhibition effect | — | Rabie AM et al., Evaluation of a series of nucleoside an…, Medicinal chemistry researc… (2023) | [10.1007/s00044-022-02970-3](https://doi.org/10.1007/s00044-022-02970-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wang_2021_activity_against_herpes_simplex_virus_type_1_HSV_1](drugs/drug_vidarabine/pd_Wang_2021_activity_against_herpes_simplex_virus_type_1_HSV_1.md) | activity against herpes simplex virus type 1 (HSV-1) ← vidarabine · inhibition effect | — | Wang Z et al., Synthesis and antiviral effect of phosp…, Bioorganic & medicinal chem… (2021) | [10.1016/j.bmcl.2021.128405](https://doi.org/10.1016/j.bmcl.2021.128405) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vidarabine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADA (substrate), ADORA2B (modulator), TK (inducer).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yang_1992.pdf` | Yang TY et al., [Studies on pharmacokinetics of 9-beta-…, Yao xue xue bao = Acta phar… (1992) | popPK | 8 | not captured | [1299143](https://pubmed.ncbi.nlm.nih.gov/1299143) | The paper reports a two-compartment PK model and numeric Ara-A half-life, MRT, and AUC values. |

<sub>queue written 2026-10-07T15:52:02.839753+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdalla_2023 | irrelevant | 0 | 0 | Vidarabine is screened in computational and antiviral assays, but no quantitative pharmacokinetic disposition values are reported. |
| popPK | Krug_2010 | irrelevant | 0 | 0 | Vidarabine is tested only for in-vitro antiviral susceptibility, with no disposition parameters reported. |
| popPK | Oh_2000 | irrelevant | 0 | 0 | This is an in-vitro antiviral combination study, not a vidarabine pharmacokinetic study. |
| popPK | Rabie_2022 | irrelevant | 0 | 0 | The study evaluates antiviral activity in vitro and reports no pharmacokinetic disposition parameters for vidarabine. |
| popPK | Rabie_2023 | irrelevant | 0 | 0 | Vidarabine is assessed in computational and in vitro antiviral assays, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study and reports no vidarabine disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:52 UTC</sub>
