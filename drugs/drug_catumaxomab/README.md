<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;catumaxomab&quot;}]"></div>

# catumaxomab

- **generic name:** catumaxomab
- **ATC codes:** `L01FX03`, `L01XC09`
- **DrugBank:** [DB06607](https://go.drugbank.com/drugs/DB06607) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Catumaxomab is a monoclonal antibody anticancer drug that was used to treat ascites caused by cancer. It was authorised in the European Union but its marketing authorisation was later withdrawn, so it is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408155](https://www.wikidata.org/wiki/Q408155) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:34 | 1:17 | 0/0/0 | 1/0/0 | 0/0/0 | 119,136/1,972 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Schroeder_2011_Tumour_cell_killing](drugs/drug_catumaxomab/pd_Schroeder_2011_Tumour_cell_killing.md) | Tumour cell killing ← catumaxomab · direct sigmoid Emax (Hill) effect | — | Schroeder P et al., Trifunctional antibodies induce efficie…, Clinical & translational on… (2011) | [10.1007/s12094-011-0751-5](https://doi.org/10.1007/s12094-011-0751-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=catumaxomab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CD3E (target), EPCAM (target), FCGR1A (target), FCGR2A (target), FCGR3A (target), FCGR3B (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ammouri_2010 | irrelevant | 0 | 0 | The paper is a review of palliative treatments for malignant ascites and reports only adverse effects and efficacy outcomes, containing no pharmacokinetic parameters (CL, V, T1/2) for catumaxomab. |
| popPK | Bender_2024 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of mosunetuzumab, not catumaxomab. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | This is a bioinformatics study that identifies catumaxomab as a potential drug target but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Dienstmann_2012 | irrelevant | 0 | 0 | This is a general review article discussing monoclonal antibodies as a class, with no specific pharmacokinetic parameters or data reported for catumaxomab. |
| popPK | Gevertz_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of teclistamab, not catumaxomab. |
| popPK | Rathi_2015 | irrelevant | 0 | 0 | The paper is a review of bispecific antibody constructs and does not report original quantitative PK parameter values for catumaxomab. |
| popPK | Ruf_2021 | irrelevant | 2 | 0 | The paper reports on the safety and efficacy of intravesical administration and contains no population pharmacokinetic model or quantitative disposition parameters (CL, V, t1/2); plasma concentrations were mostly below the quantification limit. |
| popPK | Schroeder_2011 | irrelevant | 0 | 0 | The study is an in-vitro functional assay measuring cytotoxicity and cytokine release, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sebastian_2009 | irrelevant | 1 | 0 | The paper is a clinical efficacy/safety study with no quantitative pharmacokinetic parameters reported in the provided evidence. |
| popPK | Strop_2012 | irrelevant | 0 | 0 | The paper is a methodological study on the generation of bispecific antibodies and does not report pharmacokinetic parameters for catumaxomab. |
| popPK | Zaïr_2025 | irrelevant | 0 | 0 | This is a systematic review and meta-analysis of toxicity profiles, not a pharmacokinetic study, and it does not report quantitative PK parameters like clearance or volume of distribution for catumaxomab. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
