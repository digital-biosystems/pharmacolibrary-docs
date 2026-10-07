<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;13C-urea&quot;}]"></div>

# 13C-urea

- **generic name:** 13C-urea
- **ATC codes:** `V04CX05`
- **DrugBank:** [DB09510](https://go.drugbank.com/drugs/DB09510) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Carbon-13 urea is a diagnostic agent used in breath tests to detect Helicobacter pylori infection. It is authorised in the European Union as a diagnostic product.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27114855](https://www.wikidata.org/wiki/Q27114855) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:05 | 6:17 | 0/0/0 | 0/0/0 | 0/0/0 | 709,265/7,445 | ollama / glm-5.3-flash | 46 | 4/36 | 46/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1405 matched, 88 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Oosterveld_2005.pdf` | Oosterveld MJ et al., Minimal sampling protocol for accurate…, Clinical nutrition (Edinbur… (2005) | popPK | 7 | [10.1016/j.clnu.2004.07.017](https://doi.org/10.1016/j.clnu.2004.07.017) | [15681107](https://pubmed.ncbi.nlm.nih.gov/15681107) | Compartmental modelling of oral [13C]urea disposition in piglets with numeric pool sizes and appearance rates reported in the abstract, though full PK parameters (CL, V) are not given. |

<sub>queue written 2026-10-07T21:01:37.111863+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Auttajaroon_2019 | not_relevant | 2 | 3 | 13C-urea is a diagnostic substrate in the breath test, not a therapy; CYP2C19 effect is reported on eradication rates, not on a PK/PD parameter of 13C-urea. |
| popPK | Bamgboye_2026 | irrelevant | 0 | 0 | The paper models topiramate (a 13C-labeled formulation), not 13c_urea; no 13c_urea parameters are reported. |
| popPK | Bell_2026 | irrelevant | 0 | 0 | This is a population-PK study of pirtobrutinib, a different drug; 13c_urea is not mentioned. |
| popPK | Blackman_2026 | irrelevant | 0 | 0 | This is a population-PK study of methotrexate, not 13c_urea; no 13c_urea parameters appear. |
| popPK | Cendrós_2025 | irrelevant | 0 | 0 | The paper is a population PK study of enflicoxib (and its pyrazol metabolite) in dogs, not of 13c_urea; 13c_urea does not appear as the subject drug. |
| PGx | Chang_2019 | not_relevant | 2 | 5 | 13C-urea is only a diagnostic breath-test substrate, not a therapy with PK/PD parameters; CYP2C19 genotype showed no significant effect on eradication (a PD outcome of other drugs), and no fitted pharmacogenomic effect on 13C-urea is reported. |
| PGx | Chang_2020 | not_relevant | 3 | 2 | CYP2C19 genotyping is mentioned only as a baseline characteristic; no genotype effect on 13C-urea breath test outcome or any PK/PD parameter is reported. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | This is a population-PK study of rivaroxaban, not 13c_urea; no 13c_urea parameters are reported. |
| PGx | Chotivitayatarakorn_2017 | not_relevant | 3 | 4 | CYP2C19 genotyping is reported only as eradication rates (PD outcome of therapy), not as an effect on a PK/PD parameter of 13C-urea itself. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | This is a systematic review of tigecycline population PK; 13c_urea is not the subject drug and no 13c_urea parameters appear. |
| popPK | Darwish_2026 | irrelevant | 0 | 0 | This is a population PK study of remlifanserin, a different drug; 13c_urea is not the subject (the "urea" in its chemical name is unrelated). |
| popPK | Fresquet-Molina_2025 | irrelevant | 0 | 0 | This is a systematic review of vancomycin population PK models; 13c_urea is not the subject drug and no 13c_urea parameters appear. |
| PGx | Furuta_1999 | not_relevant | 0 | 0 | 13C-urea is used only as an H. pylori breath test diagnostic; the pharmacogenomic effect reported concerns omeprazole's effect on intragastric pH, not any PK/PD parameter of 13C-urea. |
| PGx | Furuta_2001 | not_relevant | 0 | 0 | 13C-urea is only a diagnostic substrate in the breath test; the pharmacogenomic effect reported concerns rabeprazole cure rates, not any PK/PD parameter of 13c_urea. |
| PGx | Furuta_2010 | not_relevant | 2 | 1 | 13C-urea is only a diagnostic breath test substrate; no gene-variant effect on its PK/PD is reported. |
| popPK | Gao_2025 | irrelevant | 0 | 0 | The paper concerns population PK of mycophenolate sodium/MPA in renal transplant recipients; 13c_urea is not the subject drug and no parameters for it appear. |
| popPK | Gao_2026 | irrelevant | 0 | 0 | This is a systematic review of population-PK models for meropenem in pediatric patients; 13c_urea is not the subject drug and no 13c_urea parameters appear. |
| PGx | Geeratragool_2025 | not_relevant | 2 | 3 | 13C-urea is only the diagnostic breath-test substrate; CYP2C19/CYP3A5 genotypes are related to eradication outcome, not to any PK/PD parameter of 13C-urea. |
| PGx | Hu_2005 | not_relevant | 0 | 0 | 13C-urea is used only as a diagnostic H. pylori breath test; the pharmacogenomic PK/PD effects reported concern rabeprazole, not 13C-urea. |
| popPK | Husheng_2026 | irrelevant | 0 | 0 | This is a review of vancomycin population PK; 13c_urea is not the subject drug and no 13c_urea parameters appear. |
| PGx | Isomoto_2003 | not_relevant | 2 | 3 | 13C-urea is only a diagnostic breath test substrate; CYP2C19 genotype is reported not to influence eradication outcome, with no PK/PD parameter of 13C-urea affected. |
| popPK | Ju_2025 | irrelevant | 0 | 0 | This is a population-PK review/repository of rifampicin, a different drug; no 13c_urea parameters appear. |
| PGx | Krumbiegel_2000 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is studied; only food intake effects on urea breath/urine test parameters. |
| PGx | Lee_2010 | not_relevant | 2 | 3 | 13C-urea is only a diagnostic breath-test substrate; CYP2C19 genotype effects are reported for PPI eradication outcomes, not for any PK/PD parameter of 13C-urea itself. |
| popPK | Lei_2026 | irrelevant | 0 | 0 | The paper is a population-PK study of meropenem (with pyridoxic acid as a biomarker), not of 13c_urea; no 13c_urea parameters appear anywhere. |
| popPK | Li_2026 | irrelevant | 0 | 0 | 13c_urea is not a study drug; "urea" appears only as a covariate correlated with dabigatran CL/F, and all PK parameters concern probe drugs (MDZ, DAB, statins), with many values in supplementary tables. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | The paper is a PopPK/PBPK study of remimazolam, not 13c_urea; 13c_urea does not appear as the subject drug. |
| PGx | Miki_2003 | not_relevant | 2 | 3 | 13C-urea is only a diagnostic breath-test substrate; CYP2C19 effects concern PPI/clarithromycin eradication outcomes, not urea PK/PD parameters. |
| PGx | Niu_2022 | not_relevant | 2 | 2 | CYP2C19 genotype frequencies are reported only descriptively in treatment-failure patients, with no effect of genotype on any PK/PD parameter of the 13C urea breath test or eradication outcome. |
| PGx | Ozdil_2010 | not_relevant | 3 | 5 | 13C-urea is used only as a diagnostic breath test substrate, not as a drug; the pharmacogenomic effect (CYP2C19 on eradication rates) concerns lansoprazole, not 13C-urea PK/PD. |
| PGx | Poonyam_2019 | not_relevant | 2 | 3 | 13C-urea is only a diagnostic breath-test substrate; CYP2C19 genotype affects PPI-based eradication success, not any PK/PD parameter of 13C-urea itself. |
| PGx | Prapitpaiboon_2015 | not_relevant | 0 | 0 | 13C urea is only a diagnostic breath-test substrate; CYP2C19 genotype is linked to H. pylori eradication rates, not to any PK/PD parameter of 13c_urea. |
| popPK | Qiao_2026 | irrelevant | 0 | 0 | The paper is a population-PK study of imipenem, not 13c_urea; 13c_urea appears only as a lab analyte (urea nitrogen) and no 13c_urea PK parameters are reported. |
| popPK | Renou_2026 | irrelevant | 0 | 0 | This is a population PK study of cabotegravir in HIV patients; 13c_urea is not mentioned at all. |
| PGx | Rudi_2002 | not_relevant | 0 | 0 | 13C-urea is a diagnostic breath-test substrate, not a therapeutic drug, and cagA/vacA are bacterial virulence genes affecting eradication efficacy, not host pharmacogenomic effects on PK/PD parameters. |
| popPK | Saporta_2026 | irrelevant | 0 | 0 | The drug studied is meropenem in mice; 13c_urea appears only as a BAL urea correction tool for ELF concentrations, not as the subject drug. |
| popPK | Schouwenburg_2026 | irrelevant | 0 | 0 | The paper reports population PK of cefuroxime, not 13c_urea; 13c_urea is not the subject drug anywhere in the evidence. |
| PGx | Srinarong_2014 | not_relevant | 0 | 0 | 13C-urea is only a diagnostic breath-test substrate; CYP2C19 genotyping concerns lansoprazole, not urea PK/PD. |
| PGx | Sukkamolsantiporn_2025 | not_relevant | 0 | 0 | 13C-urea is only used as a diagnostic breath test substrate; no pharmacogenomic effect on its PK/PD is reported (CYP3A4 relates to vonoprazan eradication outcomes, not 13C-urea). |
| PGx | Tanigawara_1999 | not_relevant | 2 | 5 | 13C-urea is only a diagnostic breath-test substrate; the reported genotype effect is on H. pylori eradication rates, not a PK/PD parameter of 13C-urea itself. |
| popPK | Tavill_1975 | irrelevant | 2 | 1 | 13C-urea is used only as a tracer probe in a compartmental model of hepatic urea/albumin synthesis in the isolated perfused rat liver; no disposition parameters (CL, V, t½) for 13C-urea itself are reported, and model rate constants appear only symbolically/figure-based. |
| PGx | Togawa_2005 | not_relevant | 0 | 0 | 13C-urea is only used as a diagnostic breath test for H. pylori status; CYP2C19 genotyping pertains to rabeprazole efficacy, not to any PK/PD parameter of 13c_urea. |
| popPK | Tsyplakova_2025 | irrelevant | 0 | 0 | The paper models mycophenolic acid (MPA) pharmacokinetics; 13c_urea is not the subject drug (urea appears only as a covariate), so no 13c_urea parameters exist. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a population-PK model library for polymyxin B, a different drug; 13c_urea is not the subject and no parameters for it appear. |
| popPK | Wassef_2026 | irrelevant | 0 | 0 | The paper is a population-PK study of cefazolin, not 13c_urea; 13c_urea is not the subject drug and no parameters for it are reported. |
| popPK | Wen_2026 | irrelevant | 0 | 0 | The paper models salbutamol, not 13c_urea; urea appears only as a BAL dilution-correction method, so no 13c_urea PK parameters exist here. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The paper reports PopPK parameters for contezolid, a different drug; 13c_urea is not mentioned at all. |
| popPK | Xajil-Ramos_2026 | irrelevant | 0 | 0 | This is a population-PK study of tacrolimus, not 13c_urea; 13c_urea does not appear as the subject drug (only blood urea nitrogen as a covariate). |
| popPK | Xie_2026 | irrelevant | 0 | 0 | This is a population-PK review/modeling paper of daptomycin, not 13c_urea; no 13c_urea parameters appear anywhere. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper reports population PK parameters (CL, V1, V2, Q) for polymyxin B, not for 13c_urea, which is not mentioned at all. |
| popPK | Xu_2026_2 | irrelevant | 0 | 0 | The paper is a population-PK study of vancomycin in children; 13c_urea appears only as a covariate (serum urea), not as the subject drug. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | This is a population PK study of polymyxin B; 13c_urea is not the subject drug (BUN is only a covariate). |
| PGx | Ye_2026 | not_relevant | 0 | 0 | 13C-urea is used only as a breath test for H. pylori detection; no gene variant effect on its PK/PD is reported. |
| PGx | Zhang_2015 | not_relevant | 0 | 0 | 13C-urea is only a diagnostic breath test substrate; no gene variant effect on its PK/PD is reported. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is a systematic review of imipenem population PK; 13c_urea is not the subject drug (only mentioned as a measured lab analyte), so no 13c_urea parameters exist. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
