<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;carboquone&quot;}]"></div>

# carboquone

- **generic name:** carboquone
- **ATC codes:** `L01AC03`
- **DrugBank:** [DB13677](https://go.drugbank.com/drugs/DB13677)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 02:55 | 4:19 | 0/0/0 | 1/0/0 | 0/0/0 | 46,554/1,279 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 3/0 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lin_1990](drugs/drug_carboquone/pd_Lin_1990_colony_number.md) | Lin ST, [Study on chemosensitivity test (in vit…, Nihon Ika Daigaku zasshi (1990) | [10.1272/jnms1923.57.127](https://doi.org/10.1272/jnms1923.57.127) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lin_1990](drugs/drug_carboquone/pd_Lin_1990_optical_density.md) | Lin ST, [Study on chemosensitivity test (in vit…, Nihon Ika Daigaku zasshi (1990) | [10.1272/jnms1923.57.127](https://doi.org/10.1272/jnms1923.57.127) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hisaoka_1982 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding carboquone pharmacokinetics. |
| popPK | Kido_1991 | irrelevant | 0 | 0 | The paper is an in-vitro chemosensitivity study reporting IC50 values, not a pharmacokinetic study with disposition parameters for carboquone. |
| popPK | Lin_1990 | irrelevant | 0 | 0 | The paper is an in-vitro chemosensitivity study (MTT assay) and does not report pharmacokinetic parameters for carboquone. |
| popPK | Machida_1980 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding carboquone pharmacokinetics. |
| PD | Machida_1980 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding carboquone or pharmacodynamics. |
| popPK | Mizuno_1984 | irrelevant | 0 | 0 | The paper studies the antitumor efficacy of FU-O-G, with carboquone only mentioned as a co-administered agent in combination therapy, and no pharmacokinetic parameters are reported. |
| PD | Mizuno_1984 | not_relevant | 0 | 0 | The paper describes qualitative antitumor efficacy and synergy of FU-O-G with Carboquone in mice but provides no numeric PD parameters, concentration-effect curves, or dose-response modeling for Carboquone. |
| popPK | Ninomiya_1984 | irrelevant | 0 | 0 | The paper is a study on combination chemotherapy efficacy in animal models and does not report any pharmacokinetic parameters for carboquone. |
| PD | Ninomiya_1984 | not_relevant | 1 | 0 | The paper reports qualitative enhancement of anti-tumor effects in combination chemotherapy but provides no numeric PD parameters, concentration-effect curves, or dose-response data for carboquone. |
| popPK | Shibata_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitomycin C resistance where carboquone is only mentioned as a comparator drug to which the cell lines were not resistant, with no PK parameters reported. |
| PD | Shibata_1995 | not_relevant | 0 | 0 | The paper focuses on mitomycin C resistance mechanisms; carboquone is only mentioned as a drug to which the resistant cell lines were not resistant, with no exposure-response or dose-response analysis or numeric PD parameters provided for it. |
| popPK | Suzuki_2008 | irrelevant | 0 | 0 | The study is a mechanistic toxicology investigation of micronucleus formation where carboquone is used only as a test mutagen, with no pharmacokinetic parameters reported. |
| PD | Suzuki_2008 | not_relevant | 1 | 0 | The paper mentions carboquone only as one of several mutagens whose effects were qualitatively increased by cAMP pretreatment, without providing any numeric dose-response data, concentration-effect curves, or PD parameters for carboquone. |
| popPK | Yoh_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of adriamycin, and carboquone is only mentioned as a co-administered agent without any reported PK parameters. |
| PD | Yoh_1983 | not_relevant | 0 | 0 | The paper reports clinical response rates and qualitative PK comparisons for adriamycin, but provides no concentration-effect data, dose-response curves, or numeric PD parameters for carboquone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
