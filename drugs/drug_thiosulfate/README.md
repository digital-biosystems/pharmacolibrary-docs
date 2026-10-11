<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;thiosulfate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Thiosulfate_Petric2023_reference&quot;,&quot;label&quot;:&quot;Petric_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_thiosulfate/Thiosulfate_Petric2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# thiosulfate

- **generic name:** thiosulfate
- **ATC codes:** `V03AB06`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Thiosulfate (sodium thiosulfate) is an antidote used to treat cyanide poisoning. It remains in clinical use as an emergency antidote, typically given in hospital settings.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q339866](https://www.wikidata.org/wiki/Q339866) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 20:00 | 13:41 | 1/1/0 | 1/0/0 | 0/0/0 | 666,627/25,668 | ollama / glm-5.3-flash | 29 | 2/22 | 28/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Petric_2023_reference](drugs/drug_thiosulfate/Thiosulfate_Petric2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Petric Z et al., Clinical Pharmacology of Vinpocetine: P…, Pharmaceutics (2023) | [10.3390/pharmaceutics15102502](https://doi.org/10.3390/pharmaceutics15102502) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Shea_1984_reference](drugs/drug_thiosulfate/Thiosulfate_Shea1984_reference.md) | — | 1-compartment (no model) | 3 | Shea M et al., Kinetics of sodium thiosulfate, a cispl…, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.53](https://doi.org/10.1038/clpt.1984.53) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [ONeill_2012_vascular_calcification_of_injured_or_devitalized_aortas](drugs/drug_thiosulfate/pd_ONeill_2012_vascular_calcification_of_injured_or_devitalized.md) | vascular calcification of injured or devitalized aortas ← thiosulfate · inhibition effect | — | O'Neill WC et al., The chemistry of thiosulfate and vascul…, Nephrology, dialysis, trans… (2012) | [10.1093/ndt/gfr375](https://doi.org/10.1093/ndt/gfr375) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 112 matched, 92 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Farese_2011.pdf` | Farese S et al., Sodium thiosulfate pharmacokinetics in…, Clinical journal of the Ame… (2011) | popPK | 9 | [10.2215/cjn.10241110](https://doi.org/10.2215/cjn.10241110) | [21566113](https://pubmed.ncbi.nlm.nih.gov/21566113) | Human PK study of thiosulfate with numeric clearance values (renal, nonrenal, hemodialysis) and bioavailability reported directly in the abstract. |
| `Shea_1984.pdf` | Shea M et al., Kinetics of sodium thiosulfate, a cispl…, Clinical pharmacology and t… (1984) | popPK | 9 | [10.1038/clpt.1984.53](https://doi.org/10.1038/clpt.1984.53) | [6538126](https://pubmed.ncbi.nlm.nih.gov/6538126) | Human PK study of thiosulfate itself with numeric t1/2, total and renal clearance values present in the abstract. |
| `Singh_2011.pdf` | Singh RP et al., Simulation-based sodium thiosulfate dos…, Clinical journal of the Ame… (2011) | popPK | 6 | [10.2215/cjn.09671010](https://doi.org/10.2215/cjn.09671010) | [21441129](https://pubmed.ncbi.nlm.nih.gov/21441129) | PK simulation study of STS dosing in dialysis patients, but numeric disposition parameters (CL, V) are not shown in the abstract text. |

<sub>queue written 2026-10-07T19:54:52.345619+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albadry_2024 | irrelevant | 0 | 0 | This is a liver histology/CYP zonation study; thiosulfate appears only as a staining reagent, with no PK parameters. |
| PGx | Arrington_2025 | not_relevant | 0 | 0 | Microbial ecology paper on hydrocarbon metabolism; thiosulfate is a metabolic substrate, not a drug, and no pharmacogenomic PK/PD effects are reported. |
| popPK | Ashun_2022 | irrelevant | 0 | 0 | This is an in-vitro bacterial toxicity bioassay using thiosulfate as a bacterial substrate, not a pharmacokinetic study of thiosulfate disposition. |
| PGx | Atwal_2016 | not_relevant | 0 | 0 | Paper reviews molybdenum cofactor deficiency; thiosulfate is a metabolite, not a drug, and no gene-variant effect on PK/PD parameters is reported. |
| PGx | Baek_2010 | not_relevant | 0 | 0 | Case report of exchange transfusion for cyanide poisoning; no gene variant/genotype effects on thiosulfate PK/PD reported. |
| PGx | Bhattacharya_2014 | not_relevant | 0 | 0 | No gene/genotype/phenotype effects on thiosulfate PK/PD; only enzyme activity inhibition by cyanogens in rats. |
| popPK | Biglione_2024 | irrelevant | 0 | 0 | Clinical outcomes study of HBOT plus sodium thiosulfate in calciphylaxis with no PK parameters reported. |
| PGx | Billaut-Laden_2006 | not_relevant | 3 | 5 | TST variants alter enzyme activity/promoter activity in vitro, but thiosulfate is a substrate, not a drug, and no in vivo PK/PD parameter (e.g., clearance, AUC, response) is reported. |
| popPK | Brouwers_2008 | irrelevant | 0 | 0 | This is a PK study of cisplatin/oxaliplatin platinum retention; thiosulfate is only used ex vivo to release Pt from proteins, with no thiosulfate disposition parameters. |
| PGx | Brouwers_2009 | not_relevant | 3 | 2 | Thiosulfate is mentioned only as a covariate for cisplatin neuropathy; no gene variant effect on thiosulfate PK/PD is reported. |
| popPK | Campagne_2019 | irrelevant | 0 | 0 | This is a population-PK study of cyclophosphamide and its metabolites in mice; sodium thiosulfate appears only as a reagent, with no thiosulfate PK parameters reported. |
| PGx | Curry_1997 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is studied; thiosulfate effects on cyanide levels are drug-interaction, not pharmacogenomic. |
| popPK | Dawson_2005 | irrelevant | 0 | 0 | In-vitro transporter characterization where thiosulfate is only an inhibitor of sulfate transport, not a PK study of thiosulfate disposition. |
| popPK | De_2004 | irrelevant | 0 | 0 | Thiosulfate is only used as a TIE dechlorinating reagent; no PK parameters for thiosulfate are reported. |
| popPK | Doolittle_2014 | irrelevant | 2 | 0 | Review chapter mentioning a thiosulfate two-compartment model but no numeric PK parameters are provided. |
| PGx | Dossa_2026 | not_relevant | 0 | 0 | Paper is about flowering induction in yam; silver thiosulfate is a plant chemical treatment, not a drug with PK/PD parameters. |
| PGx | Drew_1983 | not_relevant | 0 | 0 | No pharmacogenomic effects on thiosulfate PK/PD are reported; text only discusses hydroxocobalamin use in cyanide toxicity. |
| PGx | Driggers_2016 | not_relevant | 2 | 3 | Structural study of CDO variants and thiosulfate as a competitive inhibitor; no gene variant effect on thiosulfate PK/PD parameters reported. |
| popPK | EFSA_2026 | irrelevant | 0 | 0 | EFSA QPS safety assessment of microorganisms; no thiosulfate PK parameters or any pharmacokinetic data present. |
| popPK | Eom_2024 | irrelevant | 0 | 0 | This is an in-vitro bacterial ecotoxicity test using thiosulfate as a microbial substrate, not a pharmacokinetic study of thiosulfate disposition. |
| popPK | Fajana_2026 | irrelevant | 0 | 0 | This is an in vitro/in silico phytochemical study of Ficus exasperata with no thiosulfate PK data. |
| PGx | Friederich_1995 | not_relevant | 0 | 0 | No pharmacogenomic effects on thiosulfate PK/PD are reported; only general dosing guidance for sodium nitroprusside. |
| popPK | Gao_2013 | irrelevant | 0 | 0 | Thiosulfate is only a reagent added during sample processing; no pharmacokinetic parameters for thiosulfate are reported. |
| PGx | Gladkov_2025 | not_relevant | 0 | 0 | Microbial ecology study of a compost biofertilizer; thiosulfate only mentioned as a bacterial metabolic pathway, no drug PK/PD or pharmacogenomic data. |
| PGx | Graeme_1999 | not_relevant | 0 | 0 | No gene/genotype/phenotype effects on thiosulfate PK/PD are reported; only placental transfer measured in ewes. |
| PGx | Hashemabadi_2014 | not_relevant | 0 | 0 | Plant physiology study of silver thiosulfate on cut flowers; no gene variant or human PK/PD pharmacogenomic effect. |
| PGx | Höbel_1978 | not_relevant | 0 | 0 | No pharmacogenomic factors; study examines nitroprusside/thiosulfate dosing toxicity in rabbits without gene variant effects. |
| PGx | Johanning_1995 | not_relevant | 0 | 0 | No pharmacogenomic analysis; thiosulfate use is only described as coadministration, with no gene variant effects on PK/PD. |
| popPK | Joshi_2019 | irrelevant | 0 | 0 | Review of bacterial CysK enzyme biology with no thiosulfate PK parameters or disposition data. |
| popPK | Lewis_2023 | irrelevant | 0 | 0 | This is a receptor pharmacology/behavioral study of 2-bromo-LSD with no thiosulfate PK parameters reported. |
| popPK | Markovich_2005 | irrelevant | 0 | 0 | This is an in-vitro transporter characterization study; thiosulfate is only an inhibitor of sulfate transport, with no PK parameters for thiosulfate. |
| popPK | Markovich_2008 | irrelevant | 0 | 0 | In-vitro transporter characterization where thiosulfate is only an inhibitor of sulfate transport, not a PK study of thiosulfate disposition. |
| PGx | Moffett_2008 | not_relevant | 0 | 0 | No pharmacogenomic factors; thiosulfate patients were excluded and no gene variant effects on PK/PD are reported. |
| PGx | Mondal_2022 | not_relevant | 0 | 0 | Microbial thermotolerance study of Paracoccus; thiosulfate is a growth medium component, not a drug, and no pharmacogenomic PK/PD effects are reported. |
| popPK | Neuwelt_1998 | irrelevant | 2 | 0 | Clinical otoprotection study with dose escalation only; no PK parameters (CL, V, half-life) for thiosulfate reported. |
| popPK | ONeill_2012 | irrelevant | 0 | 0 | In vitro mechanistic study of calcification inhibition; no PK disposition parameters for thiosulfate. |
| popPK | Olson_2018 | irrelevant | 0 | 0 | In-vitro biochemical study of SOD-mediated H2S/polysulfide metabolism; thiosulfate is only mentioned as an ineffective electron donor, with no PK parameters. |
| popPK | Olson_2020 | irrelevant | 0 | 0 | This is a chemistry/cell biology study of tea catechins oxidizing H2S to thiosulfate in vitro; thiosulfate is a reaction product, not a dosed drug, and no PK parameters for thiosulfate are reported. |
| popPK | Pascal_2023 | irrelevant | 0 | 0 | This is a microbiome bioinformatics paper about gutSMASH; thiosulfate is not studied and no PK parameters appear. |
| PGx | Patel_1986 | not_relevant | 0 | 0 | No pharmacogenomic data; thiosulfate only mentioned as a toxicity treatment, no gene variant effects on PK/PD. |
| popPK | Petric_2023 | irrelevant | 0 | 0 | This is a population PK study of vinpocetine's metabolite apovincaminic acid (AVA), not thiosulfate; thiosulfate does not appear anywhere in the paper. |
| PGx | Portmann_2026 | not_relevant | 1 | 0 | GALNT3 deletion affects disease (FGF-23/phosphate) biology; sodium thiosulfate only mentioned as topical treatment in a cited case, with no genotype effect on its PK/PD parameters. |
| popPK | Qambrani_2014 | irrelevant | 0 | 0 | This is a bacterial biosensor toxicity assay for chromium; thiosulfate is a substrate, not a drug with PK parameters. |
| popPK | Rai_2026 | irrelevant | 0 | 0 | This is a study of NIR fluorescent probes (I-43) for amyloid-β/cholinesterases, not thiosulfate; no thiosulfate PK parameters appear. |
| PGx | Reysenbach_2000 | not_relevant | 0 | 0 | Paper describes microbial phylogenetic diversity at hydrothermal vents; thiosulfate is a metabolic substrate, not a drug, and no pharmacogenomic PK/PD effects are reported. |
| PGx | Romano_2013 | not_relevant | 0 | 0 | Microbial genome comparison about thiosulfate metabolism genes in bacteria; no drug PK/PD pharmacogenomic effect. |
| popPK | Saidi_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry/anti-inflammatory study of benzofuran-dihydropyridine hybrids with no thiosulfate PK data. |
| popPK | Sarfraz_2023 | irrelevant | 0 | 0 | This is a PK study of metoprolol in rabbits, not thiosulfate; no thiosulfate parameters appear. |
| popPK | Schubert_2004 | irrelevant | 0 | 0 | Thiosulfate is only used as a cyanide inactivator in an in vitro vascular pharmacology study; no PK parameters for thiosulfate are reported. |
| popPK | Singh_2011 | relevant | 6 | 3 | PK simulation study of STS dosing in dialysis patients, but numeric disposition parameters (CL, V) are not shown in the abstract text. |
| popPK | Stanoiu_2025 | irrelevant | 0 | 0 | This is a phytochemistry/encapsulation study of Inonotus obliquus extracts with no thiosulfate PK data or parameters. |
| popPK | Sylvester_1983 | irrelevant | 2 | 2 | Thiosulfate is only a co-administered antidote; the PK model and parameters concern cyanide and its metabolite thiocyanate in dogs, not thiosulfate's own disposition, and no numeric thiosulfate values appear. |
| popPK | Tayebi_2026 | irrelevant | 0 | 0 | This is a lipid-lowering/hepatoprotection study of basil-enriched oil in mice; thiosulfate is not mentioned and no PK parameters for it exist. |
| PGx | Tegeder_2003 | not_relevant | 0 | 0 | No gene/genotype/phenotype data; STS PK reported only by treatment modality, not pharmacogenomics. |
| popPK | Thomas_2026 | irrelevant | 0 | 0 | This is a PROTAC proteomics/degradation study with no thiosulfate pharmacokinetic parameters; "half-life" refers to protein half-lives in cell culture, not drug disposition. |
| popPK | Vijayakumar_2024 | irrelevant | 0 | 0 | This is a study of EGFR inhibitors (afatinib, zorifertinib) for noise-induced hearing loss; thiosulfate is not the subject drug and no thiosulfate PK parameters appear. |
| PGx | Xu_1994 | not_relevant | 1 | 2 | Thiosulfate is only used to quench mutagenesis; no gene variant effect on thiosulfate PK/PD is reported. |
| PGx | Yamakita_2002 | not_relevant | 0 | 0 | No gene variant/genotype effect on thiosulfate PK/PD; CYP11B2 mRNA relates to aldosterone synthesis, not thiosulfate disposition. |
| PGx | Yang_2026 | not_relevant | 0 | 0 | Thiosulfate is used only as a pharmacological tool in plants; no gene variant effect on thiosulfate PK/PD is reported. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | Sugarcane transcriptomics study; thiosulfate sulfurtransferase is a plant gene, no drug PK/PD pharmacogenomic effect. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:54 UTC</sub>
