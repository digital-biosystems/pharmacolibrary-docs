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
| <span class="pk-badge pk-badge--orange">needs review</span> | [Takada_2016_lesion_score](drugs/drug_amenamevir/pd_Takada_2016_lesion_score.md) | lesion score (ordered-categorical) ← amenamevir (via virtual number of virus plaques) · categorical (graded) response model | — | Takada A et al., Integrative pharmacokinetic-pharmacodyn…, Drug metabolism and pharmac… (2016) | [10.1016/j.dmpk.2016.05.005](https://doi.org/10.1016/j.dmpk.2016.05.005) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
