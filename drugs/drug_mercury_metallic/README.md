<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;mercury, metallic&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MercuryMetallic_Sllsten1994_reference&quot;,&quot;label&quot;:&quot;S\u00e4llsten_1994_reference&quot;,&quot;href&quot;:&quot;drugs/drug_mercury_metallic/MercuryMetallic_Sllsten1994_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# mercury, metallic

- **generic name:** mercury, metallic
- **ATC codes:** `D08AK05`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 20:43 | 3:20 | 0/1/0 | 0/0/0 | 0/0/0 | 13,896/2,950 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 0/1 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sällsten_1994_reference](drugs/drug_mercury_metallic/MercuryMetallic_Sllsten1994_reference.md) | 1-compartment (no model) | 0 | Sällsten G et al., Clearance half life of mercury in urine…, Occupational and environmen… (1994) | [10.1136/oem.51.5.337](https://doi.org/10.1136/oem.51.5.337) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 205 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sällsten_1994.pdf` | Sällsten G et al., Clearance half life of mercury in urine…, Occupational and environmen… (1994) | popPK | 9 | [10.1136/oem.51.5.337](https://doi.org/10.1136/oem.51.5.337) | [8199685](https://pubmed.ncbi.nlm.nih.gov/8199685) | The study reports a quantitative one-compartment model for mercury elimination with a specific median half-life of 55 days derived from occupational exposure data. |

<sub>queue written 2026-09-29T20:42:47.743550+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aghila_2026 | irrelevant | 0 | 0 | The paper is a biomaterials study on exosome carriers and does not report pharmacokinetic parameters for mercury_metallic. |
| popPK | Boddington_1979 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| popPK | Castillo-Aleman_2025 | irrelevant | 2 | 0 | The study reports a redistribution ratio for mercury as a toxin removed by plasmapheresis, but does not provide standard population pharmacokinetic parameters (CL, V, ka) for mercury_metallic. |
| popPK | Charleston_1995 | irrelevant | 0 | 0 | The study is a histological analysis of mercury distribution in monkey brain tissue using autometallography and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Deckart_1975 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| popPK | FARNSWORTH_1946 | irrelevant | 0 | 0 | no_text gate: only 134 chars of text extracted (&lt; 400) |
| popPK | Friedmann_1973 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Hendriks_1995 | irrelevant | 2 | 0 | The paper is a theoretical modeling study on microcontaminants that mentions mercury only in the context of general outflow rate correlations, without reporting specific quantitative PK parameters (CL, V, etc.) for mercury_metallic. |
| popPK | McCabe_2025 | irrelevant | 0 | 0 | The paper is about CT imaging simulation and validation, not pharmacokinetics, and "Mercury" refers to a physical phantom, not the drug mercury_metallic. |
| popPK | STREHLER_1957 | irrelevant | 0 | 0 | no_text gate: only 185 chars of text extracted (&lt; 400) |
| popPK | Sonji_2026 | irrelevant | 0 | 0 | The paper is a conceptual review proposing a "Mercury Debt" framework and discussing mechanistic pathways and future modeling roadmaps, without reporting any original quantitative pharmacokinetic parameter values for mercury. |
| popPK | Togna_1984 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mercury's effect on ADP degradation by vascular tissue, not a pharmacokinetic study reporting disposition parameters for mercury. |
| popPK | Vahter_1995 | irrelevant | 2 | 1 | The study focuses on tissue distribution and demethylation of methyl mercury (MeHg) rather than systemic population pharmacokinetics of metallic mercury, and only reports tissue half-lives without compartmental model parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 20:42 UTC</sub>
