<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;amenamevir&quot;}]"></div>

# amenamevir

- **generic name:** amenamevir
- **ATC codes:** `J05AX26`
- **DrugBank:** [DB11701](https://go.drugbank.com/drugs/DB11701) · **PubChem:** [CID 11397521](https://pubchem.ncbi.nlm.nih.gov/compound/11397521)
- **molar mass:** 482.56 g/mol (C24H26N4O5S) — DrugBank
- **groups:** investigational

## About

Amenamevir is an antiviral drug developed for the treatment of shingles (herpes zoster). It is still investigational and is not authorised in the European Union; it has been used mainly in Japan.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27271708](https://www.wikidata.org/wiki/Q27271708) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:07 | 0:16 | 0/0/0 | 0/0/1 | 0/0/0 | 16,036/796 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Takada_2016_lesion_score](drugs/drug_amenamevir/pd_Takada_2016_lesion_score.md) | lesion score (ordered-categorical) ← amenamevir (via virtual number of virus plaques) · categorical (graded) response model | — | Takada A et al., Integrative pharmacokinetic-pharmacodyn…, Drug metabolism and pharmac… (2016) | [10.1016/j.dmpk.2016.05.005](https://doi.org/10.1016/j.dmpk.2016.05.005) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Takada_2014.pdf` | Takada A et al., Statistical analysis of Amenamevir (ASP…, Clinical pharmacology in dr… (2014) | popPK | 9 | [10.1002/cpdd.108](https://doi.org/10.1002/cpdd.108) | [27129009](https://pubmed.ncbi.nlm.nih.gov/27129009) | A population PK model of amenamevir in genital herpes patients is described, but no numeric parameter values (CL, V, ka) appear in the evidence — they presumably live in tables/figures not provided. |
| `Takada_2016.pdf` | Takada A et al., Integrative pharmacokinetic-pharmacodyn…, Drug metabolism and pharmac… (2016) | popPK | 7 | [10.1016/j.dmpk.2016.05.005](https://doi.org/10.1016/j.dmpk.2016.05.005) | [27461507](https://pubmed.ncbi.nlm.nih.gov/27461507) | PK/PD modeling of amenamevir in humans is described, but no numeric PK parameter values appear in the evidence; they likely reside in supplementary material or figures not provided. |

<sub>queue written 2026-10-07T15:07:51.847341+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andreu_2025 | irrelevant | 0 | 0 | This is a drug-discovery paper for a new HSV-1 endonuclease inhibitor (LN-7); amenamevir is only mentioned as an approved comparator drug, and the PK parameters reported (CL, AUC, F) belong to LN-7 in rats, not to amenamevir. |
| popPK | Chono_2010 | irrelevant | 0 | 0 | This is an in vitro/in vivo antiviral efficacy study with no pharmacokinetic parameters for amenamevir reported. |
| popPK | Effendi_2024 | irrelevant | 0 | 0 | Virology resistance study with EC50 values only; no pharmacokinetic parameters for amenamevir. |
| popPK | Katsumata_2013 | relevant | 4 | 3 | Murine PK/PD study of amenamevir reporting Cmax, AUC, and T&gt;100 but no compartmental disposition parameters (CL, V, half-life), and numeric PK values appear only partially in the abstract. |
| popPK | Shiraki_2020 | irrelevant | 0 | 0 | In-vitro antiviral mechanism study (EC50s) with no pharmacokinetic disposition parameters for amenamevir. |
| popPK | Takada_2014 | relevant | 9 | 2 | A population PK model of amenamevir in genital herpes patients is described, but no numeric parameter values (CL, V, ka) appear in the evidence — they presumably live in tables/figures not provided. |
| popPK | Takada_2016 | relevant | 7 | 2 | PK/PD modeling of amenamevir in humans is described, but no numeric PK parameter values appear in the evidence; they likely reside in supplementary material or figures not provided. |
| popPK | Yajima_2017 | irrelevant | 0 | 0 | In-vitro antiviral mechanism study with no PK disposition parameters for amenamevir; only a qualitative mention of "better pharmacokinetic profile." |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
