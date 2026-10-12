<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01C&quot;,&quot;href&quot;:&quot;atc/M01C.md&quot;},{&quot;label&quot;:&quot;aurothioglucose&quot;}]"></div>

# aurothioglucose

- **generic name:** aurothioglucose
- **ATC codes:** `M01CB04`
- **DrugBank:** [DB09121](https://go.drugbank.com/drugs/DB09121) · **PubChem:** [CID 6104](https://pubchem.ncbi.nlm.nih.gov/compound/6104)
- **molar mass:** 392.18 g/mol (C6H11AuO5S) — DrugBank
- **groups:** approved, withdrawn

## About

Aurothioglucose is a gold-based antirheumatic drug that was used to treat rheumatoid arthritis, including juvenile and psoriatic forms, as well as pemphigus. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4072449](https://www.wikidata.org/wiki/Q4072449) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:20 | 0:12 | 0/0/0 | 1/0/0 | 0/0/0 | 23,734/1,242 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bashtanova_2025_BrdU_incorporation](drugs/drug_aurothioglucose/pd_Bashtanova_2025_BrdU_incorporation.md) | DNA replication biomarker turnover ← aurothioglucose | — | Bashtanova U et al., The zinc finger domains of PARP-1 are s…, FEBS letters (2025) | [10.1002/1873-3468.70224](https://doi.org/10.1002/1873-3468.70224) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bashtanova_2025_PARP_1_activity](drugs/drug_aurothioglucose/pd_Bashtanova_2025_PARP_1_activity.md) | PARP-1 DNA-dependent activity biomarker turnover ← aurothioglucose | — | Bashtanova U et al., The zinc finger domains of PARP-1 are s…, FEBS letters (2025) | [10.1002/1873-3468.70224](https://doi.org/10.1002/1873-3468.70224) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bashtanova_2025_viability](drugs/drug_aurothioglucose/pd_Bashtanova_2025_viability.md) | cell viability biomarker turnover ← aurothioglucose | — | Bashtanova U et al., The zinc finger domains of PARP-1 are s…, FEBS letters (2025) | [10.1002/1873-3468.70224](https://doi.org/10.1002/1873-3468.70224) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aurothioglucose).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADCY1 (unknown), ADCY2 (unknown), ADCY5 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bashtanova_2025 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of PARP-1 enzyme inhibition and cell viability, reporting IC50/EC50 values for biological activity rather than pharmacokinetic disposition parameters (CL, V, t1/2) for aurothioglucose. |
| popPK | Cooney_1987 | irrelevant | 0 | 0 | The study measures glucose uptake in tissues of gold thioglucose-treated mice to assess insulin resistance, not the pharmacokinetic disposition parameters of the drug itself. |
| popPK | Le_1978 | irrelevant | 0 | 0 | The study focuses on insulin binding and glucose uptake in mice, using gold thioglucose to induce obesity, rather than reporting pharmacokinetic parameters for aurothioglucose. |
| popPK | Le_1982 | irrelevant | 0 | 0 | The study investigates amino acid transport mechanisms in obese mice and does not report pharmacokinetic parameters for aurothioglucose. |
| popPK | Santini_1992 | irrelevant | 0 | 0 | The study focuses on measuring iodothyronine 5'-monodeiodinase enzyme activity and content in rats, not on the pharmacokinetic disposition parameters (CL, V, t1/2) of aurothioglucose itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
