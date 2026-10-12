<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tremelimumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tremelimumab_Baverel2019_reference&quot;,&quot;label&quot;:&quot;Baverel_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tremelimumab/Tremelimumab_Baverel2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tremelimumab_Wang2014_reference&quot;,&quot;label&quot;:&quot;Wang_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tremelimumab/Tremelimumab_Wang2014_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tremelimumab

- **generic name:** tremelimumab
- **ATC codes:** `L01FX20`
- **DrugBank:** [DB11771](https://go.drugbank.com/drugs/DB11771) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tremelimumab is a monoclonal antibody used as an anticancer medicine, notably for liver cancer and non-small-cell lung cancer. It is authorised in the European Union and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7838098](https://www.wikidata.org/wiki/Q7838098) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:18 | 2:45 | 2/0/1 | 1/0/2 | 0/0/0 | 76,885/4,717 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span> | [Baverel_2019_reference](drugs/drug_tremelimumab/Tremelimumab_Baverel2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Baverel P et al., Exposure-Response Analysis of Overall S…, Clinical and translational… (2019) | [10.1111/cts.12633](https://doi.org/10.1111/cts.12633) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | [Wang_2014_reference](drugs/drug_tremelimumab/Tremelimumab_Wang2014_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wang E et al., Population pharmacokinetic and pharmaco…, Journal of clinical pharmac… (2014) | [10.1002/jcph.309](https://doi.org/10.1002/jcph.309) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Hwang_2023_reference](drugs/drug_tremelimumab/Tremelimumab_Hwang2023_reference.md) | — | 1-compartment (no model) | 1 | Hwang M et al., Population pharmacokinetic modelling of…, British journal of clinical… (2023) | [10.1111/bcp.15622](https://doi.org/10.1111/bcp.15622) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> | [Song_2023_2_CD4_Ki67](drugs/drug_tremelimumab/pd_Song_2023_2_CD4_Ki67.md) | Proliferating CD4+ Ki67+ T cells ← tremelimumab · direct Emax (saturable) effect | — | Song X et al., Modeling of Proliferating CD4 and CD8 T…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2992](https://doi.org/10.1002/cpt.2992) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> | [Song_2023_2_CD8_Ki67](drugs/drug_tremelimumab/pd_Song_2023_2_CD8_Ki67.md) | Proliferating CD8+ Ki67+ T cells ← tremelimumab · direct Emax (saturable) effect | — | Song X et al., Modeling of Proliferating CD4 and CD8 T…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2992](https://doi.org/10.1002/cpt.2992) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [He_2023_OS](drugs/drug_tremelimumab/pd_He_2023_OS.md) | overall survival ← tremelimumab · time-to-event model | — | He JZ et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2023) | [10.1002/cpt.3063](https://doi.org/10.1002/cpt.3063) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [He_2023_PFS](drugs/drug_tremelimumab/pd_He_2023_PFS.md) | progression-free survival ← tremelimumab · time-to-event model | — | He JZ et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2023) | [10.1002/cpt.3063](https://doi.org/10.1002/cpt.3063) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> | [Song_2023_CD8_Ki67_T_cells](drugs/drug_tremelimumab/pd_Song_2023_CD8_Ki67_T_cells.md) | CD8+Ki67+ T-cell count ← tremelimumab · direct Emax (saturable) effect | model (no simulator) | Song X et al., Exposure-Response Analyses of Tremelimu…, Clinical cancer research :… (2023) | [10.1158/1078-0432.CCR-22-1983](https://doi.org/10.1158/1078-0432.CCR-22-1983) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tremelimumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CTLA4 (antibody), CTLA4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `He_2023.pdf` | He JZ et al., Population Pharmacokinetics and Exposur…, Clinical pharmacology and t… (2023) | popPK | 10 | [10.1002/cpt.3063](https://doi.org/10.1002/cpt.3063) | [37777827](https://pubmed.ncbi.nlm.nih.gov/37777827) | The paper describes a population PK model for tremelimumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Hwang_2023.pdf` | Hwang M et al., Population pharmacokinetic modelling of…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15622](https://doi.org/10.1111/bcp.15622) | [36454221](https://pubmed.ncbi.nlm.nih.gov/36454221) | The paper is a population PK study of tremelimumab in humans, but the evidence only provides the baseline clearance value (0.276 L/day) and lacks other key parameters like volume of distribution or half-life. |
| `Lim_2023.pdf` | Lim K et al., Population Pharmacokinetics and Exposur…, Journal of clinical pharmac… (2023) | popPK | 10 | [10.1002/jcph.2288](https://doi.org/10.1002/jcph.2288) | [37300457](https://pubmed.ncbi.nlm.nih.gov/37300457) | The paper describes a population pharmacokinetic model for tremelimumab, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| `Wang_2014.pdf` | Wang E et al., Population pharmacokinetic and pharmaco…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.309](https://doi.org/10.1002/jcph.309) | [24737343](https://pubmed.ncbi.nlm.nih.gov/24737343) | The paper reports specific population pharmacokinetic parameter estimates (CL and Vc) for tremelimumab in humans directly in the text. |

<sub>queue written 2026-10-07T22:16:28.678432+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | He_2023 | relevant | 10 | 0 | The paper describes a population PK model for tremelimumab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Lim_2023 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for tremelimumab, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided abstract text. |
| popPK | Song_2023 | relevant | 8 | 2 | The paper validates a population PK model for tremelimumab and reports exposure metrics (Cmin1, AUC), but specific quantitative disposition parameters (CL, V, Q) are not explicitly listed in the provided text, likely residing in the referenced historical model or supplementary figures. |
| popPK | Song_2023_2 | irrelevant | 2 | 0 | The study models pharmacodynamic T-cell responses to tremelimumab exposure rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:16 UTC</sub>
