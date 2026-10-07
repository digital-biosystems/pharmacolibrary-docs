<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01X&quot;,&quot;href&quot;:&quot;atc/S01X.md&quot;},{&quot;label&quot;:&quot;sodium edetate&quot;}]"></div>

# sodium edetate

- **generic name:** sodium edetate
- **ATC codes:** `S01XA05`
- **DrugBank:** [DB13404](https://go.drugbank.com/drugs/DB13404) · **PubChem:** not captured
- **molar mass:** 380.17 g/mol (C10H12N2Na4O8) — DrugBank
- **groups:** investigational

## About

Sodium edetate is a chelating agent that has been investigated for removing toxic metals from the body and has ophthalmological use as an eye preparation. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27284152](https://www.wikidata.org/wiki/Q27284152) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:29 | 5:27 | 0/0/0 | 0/0/0 | 0/0/0 | 211,421/2,846 | ollama / glm-5.3-flash | 9 | 1/7 | 8/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1458 matched, 31 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peters_1994.pdf` | Peters AM et al., Measurement of the extravascular concen…, Nuclear medicine communicat… (1994) | popPK | 7 | [10.1097/00006231-199402000-00002](https://doi.org/10.1097/00006231-199402000-00002) | [8170640](https://pubmed.ncbi.nlm.nih.gov/8170640) | 51Cr-EDTA (edetate) plasma curves fitted with two exponentials and clearance values (68 ml/min/1.73m²) are reported directly, though volume parameters are not given. |
| `De_2004.pdf` | De Rosemond SJ et al., Wastewater treatment polymers identifie…, Environmental toxicology an… (2004) | pd | 4 | [10.1897/03-609](https://doi.org/10.1897/03-609) | [15379002](https://www.ncbi.nlm.nih.gov/pubmed/15379002) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T17:29:30.957684+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alestig_1984 | irrelevant | 0 | 0 | Chromium-EDTA is only used as a GFR tracer; the study drug is ceftazidime, with no PK parameters for sodium edetate itself. |
| popPK | Batts_1989 | irrelevant | 0 | 0 | This is an in-vitro frog palate study of mucociliary transport with EDTA as a preservative, not a pharmacokinetic study of sodium edetate disposition. |
| popPK | Becker_1994 | irrelevant | 0 | 0 | 51Cr-EDTA is only used as a diagnostic GFR marker; no PK parameters for sodium edetate are reported. |
| popPK | Bouvet_2006 | irrelevant | 2 | 3 | 51Cr-EDTA is used only as a diagnostic GFR probe; the population PK model predicts GFR from covariates, not disposition parameters of sodium edetate itself. |
| popPK | Canevarolo_2026 | irrelevant | 0 | 0 | This is a genomics/epigenomics study of multiple myeloma with no pharmacokinetic data for sodium edetate. |
| popPK | De_2004 | irrelevant | 0 | 0 | Toxicity study of mine effluent polymers in Ceriodaphnia; no PK parameters for sodium edetate. |
| popPK | Durand_2002 | irrelevant | 1 | 0 | A review of renal imaging tracers (EDTA/DTPA as GFR markers) with no PK disposition parameters for sodium edetate. |
| popPK | Francis_1983 | irrelevant | 0 | 0 | 51Cr-EDTA clearance is used only as a diagnostic marker of renal function, not as a PK study of sodium edetate, and no disposition parameters for the drug are reported. |
| popPK | Hällgren_1978 | irrelevant | 0 | 0 | 51Cr-EDTA is used only as a GFR marker; no pharmacokinetic disposition parameters for sodium edetate are reported. |
| popPK | Iwata_1998 | irrelevant | 0 | 0 | EDTA is only a permeability probe (blood-to-lumen clearance marker), not sodium_edetate PK; no disposition parameters reported. |
| popPK | Kanwar_1994 | irrelevant | 0 | 0 | 51Cr-EDTA is only a permeability probe in a rat ischemia-reperfusion study; no PK parameters for sodium edetate are reported. |
| popPK | Messa_1994 | irrelevant | 1 | 1 | Na2-EDTA is used only as a hypocalcemic provocation agent and Cr51EDTA as GFR probe; no PK disposition parameters for sodium edetate are reported. |
| popPK | Moura_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry/anticancer study of carnosic acid derivatives with no PK parameters for sodium edetate. |
| popPK | Nishiyama_2014 | irrelevant | 0 | 0 | EDTA is used only as an in-vitro metal chelator tool in a biochemical study; no PK parameters for sodium_edetate are reported. |
| popPK | Nyberg_1987 | irrelevant | 0 | 0 | 51Cr-EDTA is used only as a GFR tracer in diabetic nephropathy patients; no PK disposition parameters (CL, V, half-life, model) for sodium edetate are reported. |
| popPK | Paller_1988 | irrelevant | 0 | 0 | EDTA is only used as an iron complex to probe renal injury; no PK parameters for sodium edetate are reported. |
| popPK | Phelps_2013 | irrelevant | 0 | 0 | The paper reports population-PK parameters for myo-inositol, not sodium_edetate; sodium_edetate does not appear as the subject drug. |
| popPK | Pillai_2015 | irrelevant | 0 | 0 | This is a population PK study of oseltamivir, not sodium_edetate; no sodium_edetate parameters are present. |
| popPK | Ravenstijn_2012 | irrelevant | 0 | 0 | This is a population PK study of L-DOPA (levodopa) in rats, not sodium edetate; sodium edetate/EDTA appears only as an HPLC mobile-phase and antioxidant reagent, and no sodium edetate PK parameters are reported. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | Review of paediatric excipients with no PK parameters for sodium edetate; no numeric disposition values present. |
| popPK | Salahudeen_1989 | irrelevant | 2 | 2 | 51Cr-EDTA is used only as a GFR diagnostic marker (clearance values not reported numerically), not a PK study of sodium edetate disposition parameters. |
| popPK | Shaw_1991 | irrelevant | 0 | 0 | EDTA is only a paracellular diffusion marker in a rat placental Mg transport study; no PK parameters for sodium edetate. |
| popPK | Simeoli_2024 | irrelevant | 0 | 0 | This is a population-PK study of budesonide; sodium edetate is only an excipient in the formulation, with no PK data for it. |
| popPK | Skinner_1994 | irrelevant | 2 | 1 | 51Cr-EDTA is used only as a diagnostic GFR tracer; no PK disposition parameters (CL, V, half-life) for edetate are reported, and no numeric PK values appear in the evidence. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | A narrative review of oral peptide delivery technologies with no sodium edetate PK data or quantitative disposition parameters. |
| popPK | Willems_2009 | irrelevant | 0 | 0 | 51Cr-EDTA is only used as a GFR reference marker; no PK parameters for edetate itself are reported. |
| popPK | Zingmark_2004 | irrelevant | 0 | 0 | This is a PK/PD study of the monoclonal antibody ATM-027, not sodium_edetate; no sodium_edetate parameters are present. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
