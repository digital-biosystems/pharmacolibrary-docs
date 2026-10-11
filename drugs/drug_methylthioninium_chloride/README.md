<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;methylthioninium chloride&quot;}]"></div>

# methylthioninium chloride

- **generic name:** methylthioninium chloride
- **ATC codes:** `V03AB17`, `V04CG05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Methylthioninium chloride (methylene blue) is used as an antidote and as a diagnostic agent for testing gastric secretion. It is included on the WHO list of essential medicines, indicating broad availability, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422134](https://www.wikidata.org/wiki/Q422134) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:07 | 3:08 | 0/0/0 | 0/0/0 | 0/0/0 | 43,497/1,895 | ollama / glm-5.3-flash | 4 | 1/2 | 4/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 187 matched, 25 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Burrows_1984.pdf` | Burrows GE, Methylene blue: effects and disposition…, Journal of veterinary pharm… (1984) | popPK | 7 | [10.1111/j.1365-2885.1984.tb00904.x](https://doi.org/10.1111/j.1365-2885.1984.tb00904.x) | [6492250](https://pubmed.ncbi.nlm.nih.gov/6492250) | PK disposition parameters (elimination rate constant, half-life) for methylene blue are reported numerically in sheep, though no CL/V values are given. |
| `van_2026.pdf` | van Maanen E et al., Atypical population pharmacokinetics of…, British journal of clinical… (2026) | popPK | 7 | [10.1002/bcp.70539](https://doi.org/10.1002/bcp.70539) | [41917677](https://pubmed.ncbi.nlm.nih.gov/41917677) | Population PK (nonlinear mixed effects) of hydromethylthionine, the active moiety delivered by methylthioninium chloride, but no numeric parameter values (CL, V, etc.) are present in the evidence. |

<sub>queue written 2026-10-07T19:07:33.373383+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bateman_2016 | irrelevant | 0 | 0 | This is a conference abstract listing; the only methylene blue mention (P050) is a clinical effectiveness abstract with no PK parameters or numeric values. |
| popPK | Cairns_1989 | irrelevant | 0 | 0 | Methylene blue is only a pharmacological tool (EDRF inhibitor) in an in-vitro rabbit kidney study; no PK parameters for methylthioninium chloride. |
| popPK | Carter_1981 | irrelevant | 0 | 0 | Methylene blue is only used as a tissue-staining tracer; no PK parameters for methylthioninium chloride are reported. |
| popPK | Choi_2015 | irrelevant | 0 | 0 | A qualitative review of photodynamic therapy for psoriasis; methylene blue is only mentioned as a photosensitizer with no PK parameters. |
| popPK | Guerrero-Muñoz_2014 | irrelevant | 0 | 0 | A review of amyloid therapeutic approaches with no PK parameters for methylthioninium chloride or any numeric disposition data. |
| popPK | Kotani_2025 | irrelevant | 0 | 0 | This is a narrative review of septic shock haemodynamic management; methylene blue is only mentioned as a vasoactive agent with no PK parameters reported. |
| popPK | Kozaki_1981 | irrelevant | 0 | 0 | The evidence contains no usable text — only a GROBID header — so no PK parameters for methylthioninium chloride are present. |
| popPK | Kubes_1993 | irrelevant | 0 | 0 | Methylene blue is only used as a pharmacological tool (guanylate cyclase inhibitor) with no PK parameters reported. |
| popPK | Ledowski_2006 | irrelevant | 0 | 0 | Methylene blue is only used as a tracer dye to measure mucus transport; no PK parameters for methylthioninium chloride are reported. |
| popPK | Milani_1992 | irrelevant | 3 | 6 | Methylene blue is used as a diagnostic tracer for ascites dynamics, not as a subject drug PK study; some numeric values (volume, clearance) are present but describe peritoneal dilution, not systemic disposition. |
| popPK | Milani_1994 | irrelevant | 0 | 0 | Methylene blue is only a dilution tracer for measuring ascites volume; no PK parameters for methylthioninium chloride are reported. |
| popPK | Milani_1995 | irrelevant | 0 | 0 | Methylene blue is only a dilution tracer for measuring ascites volume; no PK parameters for methylthioninium chloride are reported. |
| popPK | Neef_1975 | irrelevant | 0 | 0 | Methylene blue is only a dye marker for infarct borders in dogs; no PK parameters for methylthioninium chloride are reported. |
| PGx | Souslova_2013 | not_relevant | 2 | 1 | General review of personalized psychiatry; no specific gene variant effect on methylthioninium chloride PK/PD reported. |
| popPK | Veerman_2023 | irrelevant | 0 | 0 | Methylene blue is only used as an antidote; the reported PK parameters (Vd 1.5 L/kg, half-life 10–50 h) belong to dapsone, not methylthioninium chloride. |
| popPK | Workum_2019 | irrelevant | 1 | 0 | Case report of nitrite overdose; methylthioninium chloride is only mentioned as treatment with no quantitative PK parameters reported. |
| popPK | Xia_2020 | irrelevant | 0 | 0 | This is an in vitro nanoparticle adsorption/release study of myricetin; methylthioninium chloride (methylene blue) is only mentioned as a cytotoxicity assay reagent, with no PK parameters. |
| popPK | el-Yazigi_1989 | irrelevant | 0 | 0 | Methylene blue is only an internal standard in an analytical assay for mitoxantrone; no PK parameters for methylthioninium chloride are reported. |
| popPK | van_2026 | relevant | 7 | 2 | Population PK (nonlinear mixed effects) of hydromethylthionine, the active moiety delivered by methylthioninium chloride, but no numeric parameter values (CL, V, etc.) are present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
