<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;edetates&quot;}]"></div>

# edetates

- **generic name:** edetates
- **ATC codes:** `V03AB03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Edetates, such as sodium calcium edetate, are chelating antidotes used to treat heavy metal poisoning, most notably lead poisoning. It is included on the WHO list of essential medicines, indicating it remains in use worldwide, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q9189390](https://www.wikidata.org/wiki/Q9189390) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:09 | 3:04 | 0/0/0 | 0/0/0 | 0/0/0 | 20,814/1,746 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1444 matched, 18 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peters_1994.pdf` | Peters AM et al., Measurement of the extravascular concen…, Nuclear medicine communicat… (1994) | popPK | 7 | [10.1097/00006231-199402000-00002](https://doi.org/10.1097/00006231-199402000-00002) | [8170640](https://pubmed.ncbi.nlm.nih.gov/8170640) | 51Cr-EDTA plasma clearance curves fitted with two exponentials and numeric clearance values (68 ml/min/1.73m²) are reported in the abstract, though volume/half-life parameters are not shown. |

<sub>queue written 2026-10-07T19:09:12.317622+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alestig_1984 | irrelevant | 0 | 0 | 51Cr-EDTA is only used as a GFR diagnostic probe; the study drug is ceftazidime, with no edetate PK parameters reported. |
| popPK | Batts_1989 | irrelevant | 0 | 0 | In-vitro frog palate study of mucociliary transport with EDTA as a preservative; no pharmacokinetic disposition parameters for edetates. |
| popPK | Becker_1994 | irrelevant | 0 | 0 | 51Cr-EDTA is only used as a diagnostic marker of renal function; no PK disposition parameters for edetates are reported. |
| popPK | Bouvet_2006 | irrelevant | 2 | 3 | 51Cr-EDTA is used only as a GFR diagnostic probe; the PK model is of the covariate equation for GFR, not edetate disposition parameters (no CL/V for EDTA itself). |
| popPK | Durand_2002 | irrelevant | 1 | 0 | A review of renal imaging tracers (DTPA/EDTA used only as diagnostic probes) with no PK disposition parameters or numeric values reported. |
| popPK | Francis_1983 | irrelevant | 0 | 0 | 51Cr-EDTA is used only as a GFR diagnostic probe; no edetate disposition parameters are reported. |
| popPK | Hällgren_1978 | irrelevant | 0 | 0 | Study of serum gastrin vs kidney function; 51Cr-EDTA is only a GFR marker, no edetate PK parameters reported. |
| popPK | Iwata_1998 | irrelevant | 0 | 0 | EDTA is only a permeability probe (blood-to-lumen clearance marker), not a PK study of edetate disposition; no PK parameters reported. |
| popPK | Kanwar_1994 | irrelevant | 0 | 0 | 51Cr-EDTA is only a permeability probe, not a PK study of edetates; no disposition parameters reported. |
| popPK | Messa_1994 | irrelevant | 0 | 0 | EDTA is used only as a diagnostic hypocalcemic challenge and Cr51EDTA as GFR marker; no PK disposition parameters for edetates are reported. |
| popPK | Nishiyama_2014 | irrelevant | 0 | 0 | EDTA is used only as a metal chelator in a biochemical in-vitro study of a catalytic antibody; no pharmacokinetic parameters for edetates are reported. |
| popPK | Nyberg_1987 | irrelevant | 1 | 2 | 51Cr-EDTA is used only as a GFR diagnostic marker; no PK disposition parameters (CL, V, half-life) for edetate itself are reported, and individual GFR values are in a table not fully provided. |
| popPK | Paller_1988 | irrelevant | 0 | 0 | EDTA is only used as an iron complex to probe renal injury; no PK parameters for edetates are reported. |
| popPK | Salahudeen_1989 | irrelevant | 2 | 2 | 51Cr-EDTA is used only as a GFR marker; no disposition PK parameters (CL, V, model) for edetates itself are reported. |
| popPK | Shaw_1991 | irrelevant | 1 | 2 | EDTA is only a paracellular diffusional marker in a rat placental Mg transport study, not a PK study of edetate disposition; only Kmf values are referenced without numeric parameters. |
| popPK | Skinner_1994 | irrelevant | 2 | 1 | 51Cr-EDTA is only a diagnostic GFR marker; no disposition parameters (CL, V, half-life) for the edetate itself are reported. |
| popPK | Willems_2009 | irrelevant | 0 | 0 | Cr-EDTA clearance is only used as a GFR reference marker; no edetate disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
