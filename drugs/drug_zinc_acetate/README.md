<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;zinc acetate&quot;}]"></div>

# zinc acetate

- **generic name:** zinc acetate
- **ATC codes:** `A16AX05`
- **DrugBank:** [DB14487](https://go.drugbank.com/drugs/DB14487) · **PubChem:** not captured
- **molar mass:** 183.497 g/mol (C4H6O4Zn) — DrugBank
- **groups:** approved

## About

**Indication.** Zinc can be used for the treatment and prevention of zinc deficiency/its consequences, including stunted growth and acute diarrhea in children, and slowed wound healing. It is also utilized for boosting the immune system, treating the common cold and recurrent ear infections, as well as preventing lower respiratory tract infections [L2172].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 03:24 | 1:35 | 0/0/0 | 1/1/0 | 0/0/0 | 2,254/248 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/5 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Friedland_2016_EC50](drugs/drug_zinc_acetate/pd_Friedland_2016_EC50.md) | CVL anti-HIV-1 activity EC50 ← MIV-150 · inhibition effect | — | Friedland BA et al., First-in-Human Trial of MIV-150 and Zin…, Journal of acquired immune… (2016) | [10.1097/QAI.0000000000001136](https://doi.org/10.1097/QAI.0000000000001136) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Chen_2026_EPO](drugs/drug_zinc_acetate/pd_Chen_2026_EPO.md) | plasma erythropoietin ← zinc · stimulation effect | — | Chen YH et al., Oyster-derived Zinc Exhibits Superior A…, Biological trace element re… (2026) | [10.1007/s12011-026-05073-x](https://doi.org/10.1007/s12011-026-05073-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Chen_2026_RBC](drugs/drug_zinc_acetate/pd_Chen_2026_RBC.md) | red blood cell count ← zinc · stimulation effect | — | Chen YH et al., Oyster-derived Zinc Exhibits Superior A…, Biological trace element re… (2026) | [10.1007/s12011-026-05073-x](https://doi.org/10.1007/s12011-026-05073-x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zinc_acetate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Zinc is absorbed in the small intestine by a carrier-mediated mechanism…”</sub> | prose |
| distribution | blood | `ORM2` unknown | DrugBank actor |
| metabolism | small intestine | <sub>“…transport into the enterocytes in the duodenum and jejunum…”</sub> | prose |
| excretion | bile duct | <sub>“…Considerable amounts of zinc are secreted through both biliary and intestinal secretions…”</sub> | prose |
| excretion | kidney | <sub>“…Other routes of zinc excretion include both urine…”</sub> | prose |
| excretion | skin | <sub>“…surface losses (sloughed skin, hair, sweat)…”</sub> | prose |
| excretion | small intestine | <sub>“…secreted through both biliary and intestinal secretions…”</sub> | prose |

<sub>Actors without a tissue in the table: A1BG (unknown), A2M (unknown), ADH1C (target), AGT (unknown), AHSG (unknown), ALDOA (unknown), APCS (unknown), APLP1 (unknown), APLP2 (unknown), APOA1 (unknown), APOA2 (unknown), APOA4 (unknown), APOBR (unknown), APOE (unknown), APOL1 (unknown), APP (unknown), ASPA (unknown), BDKRB1 (unknown), BRCC3 (unknown), C1QB (unknown), C1QC (unknown), C1R (unknown), C1S (unknown), C3 (unknown), C4B (unknown), C4BPA (unknown), C4BPB (unknown), C5 (unknown), C8A (unknown), C8B (unknown), C8G (unknown), CA1 (target), CCS (unknown), CFB (unknown), CFH (unknown), CFI (unknown), CLU (unknown), CP (unknown), CPE (inhibitor), CPE (target), CPN1 (unknown), CPN2 (unknown), DAND5 (unknown), DCD (unknown), DSP (unknown), EEF1A1 (unknown), ENO1 (unknown), ESR1 (unknown), F12 (unknown), F13B (unknown), F2 (unknown), FCN3 (unknown), FGA (unknown), FN1 (unknown), GAPDHS (unknown), GLRA1 (unknown), GSN (unknown), HBA1 (unknown), HBB (unknown), HDAC1 (unknown), HDAC4 (unknown), HDAC8 (unknown), HPR (unknown), HRNR (unknown), IDE (target), IGFALS (unknown), IGHA1 (unknown), IGHM (unknown), IGKV1-17 (unknown), IGKV3-20 (unknown), IGLV3-21 (unknown), IL3 (unknown), INS (unknown), ITIH1 (unknown), ITIH2 (unknown), ITIH3 (unknown), ITIH4 (unknown), JCHAIN (unknown), JUP (unknown), KLKB1 (unknown), KNG1 (unknown), KRT1 (unknown), KRT10 (unknown), KRT14 (unknown), KRT16 (unknown), KRT2 (unknown), KRT5 (unknown), KRT6A (unknown), KRT9 (unknown), MDM2 (unknown), MGMT (unknown), MMP9 (unknown), MPG (unknown), MT1A (unknown), MT2A (unknown), MT3 (unknown), NME1 (unknown), P4HB (unknown), PARP1 (unknown), PDCD6 (unknown), PDIA3 (unknown), PGLYRP2 (unknown), PON1 (unknown), PRDX1 (unknown), PSPH (unknown), PZP (unknown), S100A2 (unknown), S100A7 (unknown), S100A8 (unknown), S100A9 (unknown), SELENOP (unknown), SEMG1 (unknown), SERPINA1 (unknown), SERPINA3 (unknown), SERPINA4 (unknown), SERPINA6 (unknown), SERPIND1 (unknown), SHBG (unknown), SIVA1 (unknown), SOD1 (target), SOD1 (unknown), TF (unknown), TP53 (unknown), TP73 (unknown), TPI1 (unknown), TTR (unknown), TUFM (unknown), UTRN (unknown), VTN (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 42 matched, 41 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Thorson_2014.pdf` | Thorson MK et al., Inhibition of the lymphoid tyrosine pho…, Bioorganic & medicinal chem… (2014) | pd | 4 | [10.1016/j.bmcl.2014.06.016](https://doi.org/10.1016/j.bmcl.2014.06.016) | [24997687](https://www.ncbi.nlm.nih.gov/pubmed/24997687) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T03:24:25.706123+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelmigid_2022 | irrelevant | 0 | 0 | This is a zinc oxide nanoparticle synthesis and toxicity study, not a pharmacokinetic study of zinc acetate. |
| PD | Abdelmigid_2022 | not_relevant | 0 | 0 | Zinc acetate is mentioned only as a precursor for chemical ZnO nanoparticle synthesis; the reported IC50 values concern the resulting ZnO nanoparticles, not zinc acetate exposure-response or PD. |
| popPK | Ali_2017 | irrelevant | 0 | 0 | Zinc acetate is only a synthesis precursor, and no pharmacokinetic parameters or numeric disposition values are reported. |
| PD | Ali_2017 | not_relevant | 0 | 0 | Zinc acetate is only used as a precursor to synthesize ZnO nanostructures; the paper does not report a zinc acetate dose/exposure-response relationship or numeric PD parameters. |
| popPK | Alrabayah_2022 | irrelevant | 0 | 0 | Zinc acetate is only used to synthesize ZnO nanoparticles, with no pharmacokinetic study or numeric disposition parameters. |
| PD | Alrabayah_2022 | not_relevant | 0 | 0 | Zinc acetate is only used as a precursor for ZnO nanoparticles; the reported IC50/CC50 values apply to ZnO-NPs, plant extract, and their combination, not to zinc acetate or a zinc acetate exposure/dose-response relationship. |
| popPK | Atanasiu_1976 | irrelevant | 0 | 0 | Zinc acetate is only used as a precipitation reagent, with no pharmacokinetic study or numeric PK parameters. |
| PGx | Cavalli_2025 | not_relevant | 0 | 1 | The paper describes an AP1S1-associated MEDNIK case and zinc acetate treatment but does not report genotype-dependent effects on a zinc acetate pharmacokinetic or pharmacodynamic parameter. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | This is an in vitro zinc bioavailability and rat efficacy study with no pharmacokinetic parameters for zinc acetate; zinc acetate is only mentioned in background. |
| popPK | Eby_1997 | irrelevant | 0 | 0 | This is an efficacy re-analysis of zinc lozenges, not a pharmacokinetic study and reports no zinc acetate disposition parameters. |
| popPK | Eby_2006 | irrelevant | 0 | 0 | This clinical trial studies zinc gluconate and zinc orotate, not zinc acetate, and reports no pharmacokinetic parameters. |
| PD | Eby_2006 | not_relevant | 1 | 0 | The paper only mentions prior dose-response findings qualitatively and reports a fixed-dose treatment-versus-placebo outcome, with no zinc acetate exposure/dose-response analysis or numeric PD parameters. |
| popPK | Friedland_2016 | irrelevant | 2 | 0 | Zinc acetate was administered and zinc PK was explored, but no quantitative disposition parameters or postdose zinc values are reported. |
| popPK | Gadalla_2020 | irrelevant | 0 | 0 | Zinc acetate is only a cross-linking reagent, while the pharmacokinetic study concerns progesterone. |
| PD | Gadalla_2020 | not_relevant | 0 | 0 | The study evaluates progesterone formulations, not zinc acetate, and reports only qualitative/comparative uterine effects without a zinc exposure- or dose-response relationship or numeric PD parameters. |
| popPK | Gogu_1996 | irrelevant | 0 | 0 | This is an in-vitro toxicity study with zinc acetate as a protective co-treatment and reports no zinc acetate pharmacokinetic parameters. |
| PD | Gogu_1996 | not_relevant | 2 | 1 | Zinc acetate was tested only at a single concentration (100 microM); the numeric IC50 shifts are for AZT, while zinc-related MT induction is only described qualitatively without a zinc exposure-response curve or numeric PD parameters. |
| popPK | Hiruta_2026 | irrelevant | 0 | 0 | This clinical supplementation study reports serum zinc concentrations and growth outcomes, not quantitative zinc acetate pharmacokinetic disposition parameters. |
| popPK | Huang_2018 | irrelevant | 0 | 0 | This is an in-vitro demineralization assay with no pharmacokinetic model or disposition parameters for zinc acetate. |
| PD | Huang_2018 | not_relevant | 5 | 1 | The study reports a qualitative log-linear zinc acetate concentration-response relationship using PRCLHAP, but provides no numeric slope, intercept, Emax, EC50/IC50, or underlying effect data from which these parameters can be derived in the supplied text. |
| popPK | Imraish_2021 | irrelevant | 0 | 0 | Zinc acetate is only a synthesis precursor, and no pharmacokinetic parameters or numeric disposition values are reported. |
| PD | Imraish_2021 | not_relevant | 0 | 0 | The paper reports IC50 values for biosynthesized ZnFe2O4 nanoparticles, not a dose- or exposure-response relationship or PD parameters for zinc acetate. |
| popPK | Jasim_2026 | irrelevant | 0 | 0 | Zinc acetate is only a nanoparticle-synthesis precursor, and the paper reports no pharmacokinetic parameters or numeric PK values. |
| PD | Jasim_2026 | not_relevant | 0 | 0 | The paper reports cytotoxic IC50 values for zinc oxide nanoparticles, while zinc acetate is only a synthesis precursor and has no dose/exposure-response or PD parameters reported. |
| popPK | Jefferson_2014 | irrelevant | 0 | 0 | This review concerns oseltamivir and zanamivir, not zinc acetate, and reports no zinc acetate pharmacokinetic values. |
| PD | Jefferson_2014 | not_relevant | 0 | 0 | The paper is a clinical review of oseltamivir and zanamivir and reports no pharmacodynamic or exposure-response relationship for zinc acetate. |
| PGx | Kanda_2025 | not_relevant | 0 | 0 | The paper examines zinc acetate antiviral activity and GRP78 expression by HAV genotype, not how a host genetic variant or phenotype alters a zinc acetate PK or PD parameter. |
| popPK | Khajuria_2025 | irrelevant | 0 | 0 | This is an in-vitro nanoparticle synthesis and bioactivity study, with zinc acetate only used as a precursor and no pharmacokinetic parameters. |
| PD | Khajuria_2025 | not_relevant | 0 | 0 | The study reports antioxidant and antibacterial IC50/zone-of-inhibition results for zinc oxide nanoparticles synthesized using zinc acetate, not a dose- or concentration-response relationship for zinc acetate itself. |
| popPK | Kumar_2020 | irrelevant | 0 | 0 | Zinc acetate is only a nanocapsule precursor, and no zinc acetate pharmacokinetic parameters or numeric disposition values are reported. |
| PD | Kumar_2020 | not_relevant | 0 | 0 | Zinc acetate is only described as a synthesis precursor; the paper reports qualitative or unspecified cytotoxicity/IC50 findings for drug-loaded nanocapsules, not a numeric zinc acetate dose- or concentration-response relationship. |
| popPK | Matowane_2023 | irrelevant | 0 | 0 | This is an in-vitro zinc complexation and pharmacology study with no pharmacokinetic disposition parameters or numeric PK values. |
| PD | Matowane_2023 | not_relevant | 1 | 0 | The numeric EC50/IC50 values are reported for the zinc–caffeic acid complex or caffeic acid, not zinc acetate itself, with no zinc acetate-specific dose/exposure-effect relationship or parameters provided. |
| popPK | Mizenina_2017 | irrelevant | 0 | 0 | This is an in-vitro antiviral study with no pharmacokinetic disposition parameters or numeric PK values for zinc acetate. |
| popPK | Nakao_1973 | irrelevant | 0 | 0 | Zinc acetate is only a purification reagent in a virology study, with no pharmacokinetic parameters or numeric values. |
| popPK | Namulinda_2024 | irrelevant | 0 | 0 | This is an in-vitro photodynamic-therapy nanoconjugate study of zinc oxide and protoporphyrin IX, not zinc acetate pharmacokinetics, and reports no PK parameters. |
| PD | Namulinda_2024 | not_relevant | 0 | 0 | The paper concerns zinc oxide–protoporphyrin nanoconjugates for photodynamic therapy, not zinc acetate, and reports no extractable numeric exposure- or dose-response parameters. |
| popPK | Ogunnupebi_2023 | irrelevant | 0 | 0 | This is a review of benzothiazepine chemistry and pharmacology with no zinc acetate pharmacokinetic parameters or numeric values. |
| PD | Ogunnupebi_2023 | not_relevant | 0 | 0 | This review concerns benzothiazepine compounds and reports no zinc acetate exposure-response, dose-response, or numeric pharmacodynamic parameters. |
| popPK | Ross_1995 | irrelevant | 0 | 0 | Zinc acetate is an in-vitro enzyme assay modulator, not a pharmacokinetic subject drug, and no PK parameters are reported. |
| popPK | Sabi_2026 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of zinc oxide nanoparticles, not a pharmacokinetic study of zinc acetate. |
| PD | Sabi_2026 | not_relevant | 0 | 0 | The study reports a cytotoxicity IC50 of 50 µg/mL for Lantana camara-derived zinc oxide nanoparticles, not for zinc acetate, and provides no zinc acetate exposure-response relationship. |
| popPK | Thorson_2014 | irrelevant | 0 | 0 | This is an in-vitro enzyme inhibition study using zinc acetate as a reagent, with no pharmacokinetic parameters or numeric disposition values. |
| PD | Thorson_2014 | not_relevant | 1 | 0 | The text only qualitatively mentions zinc acetate modulation of enzyme inhibition and reports IC50 values for other chelator compounds, with no numeric zinc concentration-effect or dose-effect parameters. |
| popPK | Truong_2023 | irrelevant | 0 | 0 | This nanomaterial synthesis and bioactivity study uses zinc acetate only as a precursor and reports no pharmacokinetic parameters. |
| PD | Truong_2023 | not_relevant | 0 | 0 | The paper evaluates antibacterial and cytotoxic effects of PLE-doped ZnO nanoparticles, not zinc acetate, and reports no zinc acetate exposure-response or dose-response PD parameters. |
| popPK | Waalkes_1989 | irrelevant | 0 | 0 | This carcinogenesis study reports no pharmacokinetic model or quantitative disposition parameters for zinc acetate. |
| popPK | Wahyuningsih_2026 | irrelevant | 0 | 0 | This is a review of phytochemical nanocarriers and reports no zinc_acetate pharmacokinetic parameters or numeric disposition values. |
| PD | Wahyuningsih_2026 | not_relevant | 0 | 0 | This review does not report zinc acetate treatment, concentration- or dose-response data, or numeric pharmacodynamic parameters. |
| PGx | Yagasaki_2023 | not_relevant | 0 | 0 | The paper describes a TRPS1 variant associated with zinc deficiency and clinical response to zinc acetate, but does not report a pharmacokinetic or pharmacodynamic parameter of zinc acetate or a fitted genotype effect. |
| popPK | Yu_2013 | irrelevant | 0 | 0 | Zinc acetate is only an excipient, while pharmacokinetics were studied for exenatide and no zinc acetate parameters are reported. |
| PD | Yu_2013 | not_relevant | 0 | 0 | Zinc acetate is only an excipient, and the paper reports no zinc acetate dose/exposure-response relationship or numeric PD parameters. |
| popPK | Zhang_2012 | irrelevant | 0 | 0 | This is a mechanistic coordination-chemistry study using zinc acetate as a reagent and reports no pharmacokinetic parameters or numeric PK values. |
| PD | Zhang_2012 | not_relevant | 0 | 0 | The paper describes cooperative zinc binding and fluorescence titrations in an artificial peptide, not a pharmacodynamic or exposure/dose-response relationship for zinc acetate, and provides no extractable Emax, EC50, slope, or analogous PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
