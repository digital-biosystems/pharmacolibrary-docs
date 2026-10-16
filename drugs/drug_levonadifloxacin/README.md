<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;levonadifloxacin&quot;}]"></div>

# levonadifloxacin

- **generic name:** levonadifloxacin
- **ATC codes:** `J01MA24`
- **DrugBank:** [DB16219](https://go.drugbank.com/drugs/DB16219) · **PubChem:** not captured
- **molar mass:** 360.385 g/mol (C19H21FN2O4) — DrugBank
- **groups:** investigational

## About

Levonadifloxacin is an investigational fluoroquinolone antibacterial, related to nadifloxacin, studied as a treatment for bacterial infections. It is not an approved medicine; it remains under investigation and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27117310](https://www.wikidata.org/wiki/Q27117310) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:11 | 0:06 | 0/0/0 | 0/0/1 | 0/0/0 | 10,020/807 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span> | [Mason_2019_ddHR](drugs/drug_levonadifloxacin/pd_Mason_2019_ddHR.md) | ddHR ← levonadifloxacin · direct linear effect | — | Mason JW et al., Electrocardiographic Effects of a Supra…, Clinical and translational… (2019) | [10.1111/cts.12594](https://doi.org/10.1111/cts.12594) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by ollama:gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Mason_2019_ddQTcF](drugs/drug_levonadifloxacin/pd_Mason_2019_ddQTcF.md) | ddQTcF ← levonadifloxacin · direct linear effect | — | Mason JW et al., Electrocardiographic Effects of a Supra…, Clinical and translational… (2019) | [10.1111/cts.12594](https://doi.org/10.1111/cts.12594) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bhagwat_2019.pdf` | Bhagwat SS et al., In Vivo Pharmacokinetic/Pharmacodynamic…, Antimicrobial agents and ch… (2019) | popPK | 8 | [10.1128/AAC.00909-19](https://doi.org/10.1128/AAC.00909-19) | [31208999](https://pubmed.ncbi.nlm.nih.gov/31208999) | The study reports quantitative PK/PD targets (fAUC/MIC) for levonadifloxacin in mice, but does not provide standard disposition parameters like clearance (CL) or volume of distribution (V). |
| `Saseedharan_2024.pdf` | Saseedharan S et al., Treatment challenges in the management…, Indian journal of medical m… (2024) | pd | 5 | [10.1016/j.ijmmb.2024.100528](https://doi.org/10.1016/j.ijmmb.2024.100528) | [38228227](https://www.ncbi.nlm.nih.gov/pubmed/38228227) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-14T23:11:15.850804+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baliga_2020 | irrelevant | 0 | 0 | The study is an in vitro antimicrobial susceptibility assessment (disk diffusion) and does not report quantitative pharmacokinetic parameters. |
| popPK | Bhagwat_2019 | relevant | 8 | 0 | The study reports quantitative PK/PD targets (fAUC/MIC) for levonadifloxacin in mice, but does not provide standard disposition parameters like clearance (CL) or volume of distribution (V). |
| popPK | Bhawsar_2021 | irrelevant | 1 | 0 | The paper focuses on the design and synthesis of a prodrug (alalevonadifloxacin) and qualitative in vitro/animal cleavage studies, without reporting quantitative PK parameters (CL, V, etc.) for levonadifloxacin. |
| popPK | Herbert_2022 | irrelevant | 0 | 0 | The paper is a review of fluoroquinolones for bacterial keratitis that mentions levonadifloxacin only as a new-generation agent, without reporting any quantitative pharmacokinetic parameters (CL, V, etc.) for it. |
| popPK | Mason_2019 | irrelevant | 2 | 2 | The study is a thorough QT (TQT) assessment focused on electrocardiographic effects, reporting only non-compartmental exposure metrics (Cmax, AUC, Tmax) without quantitative disposition parameters like clearance, volume of distribution, or compartmental model parameters. |
| popPK | Saseedharan_2024 | irrelevant | 1 | 0 | This is a consensus statement regarding the therapeutic use of levonadifloxacin and does not report original quantitative pharmacokinetic parameter values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
