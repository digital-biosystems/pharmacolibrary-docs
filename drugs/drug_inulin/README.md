<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;Inulin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Inulin_Duong2021_reference&quot;,&quot;label&quot;:&quot;Duong_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_inulin/Inulin_Duong2021_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Inulin

- **generic name:** Inulin
- **ATC codes:** `V04CH01`
- **DrugBank:** [DB00638](https://go.drugbank.com/drugs/DB00638) · **PubChem:** not captured
- **groups:** approved, investigational, nutraceutical

## About

Inulin is used as a diagnostic agent for testing kidney (renal) function. It is an approved substance and is also considered a nutraceutical, so it is used both in medical testing and as a dietary supplement.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:42 | 31:53 | 1/0/2 | 0/0/0 | 0/0/0 | 469,192/24,192 | ollama / glm-5.3-flash | 23 | 6/13 | 21/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Duong_2021_reference](drugs/drug_inulin/Inulin_Duong2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Duong A et al., Aminoglycosides in the Intensive Care U…, Antibiotics (Basel, Switzer… (2021) | [10.3390/antibiotics10050507](https://doi.org/10.3390/antibiotics10050507) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cat</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Haller_2003_reference](drugs/drug_inulin/Inulin_Haller2003_reference.md) | — | 1-compartment (no model) | 3 | Haller M et al., Single-injection inulin clearance for r…, Journal of feline medicine… (2003) | [10.1016/S1098-612X(03)00005-6](https://doi.org/10.1016/S1098-612X(03)00005-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Hwang_2021_reference](drugs/drug_inulin/Inulin_Hwang2021_reference.md) | — | 1-compartment (no model) | 2 | Hwang SK et al., Novel in vivo and ex vivo hybrid in viv…, Journal of pharmacological… (2021) | [10.1016/j.vascn.2021.107084](https://doi.org/10.1016/j.vascn.2021.107084) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=inulin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: INS (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 359 matched, 85 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Haller_2003.pdf` | Haller M et al., Single-injection inulin clearance for r…, Journal of feline medicine… (2003) | popPK | 7 | [10.1016/S1098-612X(03)00005-6](https://doi.org/10.1016/S1098-612X(03)00005-6) | [12765628](https://pubmed.ncbi.nlm.nih.gov/12765628) | Inulin PK (two-compartment clearance) in cats with numeric GFR/clearance values reported in the abstract. |
| `Durbin_1989.pdf` | Durbin PW et al., Predicting the kinetics of chelating ag…, Health physics 57 Suppl (1989) | popPK | 6 | [10.1097/00004032-198907001-00021](https://doi.org/10.1097/00004032-198907001-00021) | [2514156](https://pubmed.ncbi.nlm.nih.gov/2514156) | Inulin is one of the modeled tracers in a two-compartment PK analysis, but the abstract reports no numeric inulin parameter values (they presumably reside in the paper's tables/figures not provided). |
| `Hwang_2021.pdf` | Hwang SK et al., Novel in vivo and ex vivo hybrid in viv…, Journal of pharmacological… (2021) | popPK | 5 | [10.1016/j.vascn.2021.107084](https://doi.org/10.1016/j.vascn.2021.107084) | [34102290](https://pubmed.ncbi.nlm.nih.gov/34102290) | Inulin (fluorescent GFR-Vivo 680) clearance kinetics in mice with two-compartment model fitting and numeric GFR values are reported, though full PK parameters (CL, V) are not detailed. |
| `Varma_1981.pdf` | Varma KJ et al., A study on renal function in the Indian…, Journal of veterinary pharm… (1981) | popPK | 5 | [10.1111/j.1365-2885.1981.tb00867.x](https://doi.org/10.1111/j.1365-2885.1981.tb00867.x) | [7349346](https://pubmed.ncbi.nlm.nih.gov/7349346) | Inulin PK (two-compartment clearance) in buffalo is the subject, but no numeric parameter values appear in the evidence. |
| `Verhagen_1994.pdf` | Verhagen CA et al., The renal clearance of cefuroxime and c…, British journal of clinical… (1994) | pd | 5 | [10.1111/j.1365-2125.1994.tb04260.x](https://doi.org/10.1111/j.1365-2125.1994.tb04260.x) | [8186065](https://www.ncbi.nlm.nih.gov/pubmed/8186065) | metadata signals extractable PD data (EC50) |
| `Pagano_2016.pdf` | Pagano I et al., Chemical profile and cellular antioxida…, Food & function (2016) | pd | 4 | [10.1039/c6fo01443g](https://doi.org/10.1039/c6fo01443g) | [27809319](https://www.ncbi.nlm.nih.gov/pubmed/27809319) | metadata signals extractable PD data (EC50) |
| `VanWert_2008.pdf` | VanWert AL et al., Impaired clearance of methotrexate in o…, Pharmaceutical research (2008) | pgx | 8 | [10.1007/s11095-007-9407-0](https://doi.org/10.1007/s11095-007-9407-0) | [17660957](https://www.ncbi.nlm.nih.gov/pubmed/17660957) | metadata signals extractable PGX data (Slc22a8, PK/PD-context) |
| `Zhang_2018.pdf` | Zhang Z et al., Drug Clearance from Cerebrospinal Fluid…, Molecular pharmaceutics (2018) | pgx | 8 | [10.1021/acs.molpharmaceut.7b00852](https://doi.org/10.1021/acs.molpharmaceut.7b00852) | [29436232](https://www.ncbi.nlm.nih.gov/pubmed/29436232) | metadata signals extractable PGX data (Slc22a6, PK/PD-context) |
| `Enokizono_2007.pdf` | Enokizono J et al., Effect of breast cancer resistance prot…, Molecular pharmacology (2007) | pgx | 7 | [10.1124/mol.107.034751](https://doi.org/10.1124/mol.107.034751) | [17644650](https://www.ncbi.nlm.nih.gov/pubmed/17644650) | metadata signals extractable PGX data (Abcg2, PK/PD-context) |

<sub>queue written 2026-10-07T22:24:35.112692+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agarwal_2010 | not_relevant | 0 | 0 | Inulin is only a BBB integrity marker, not the drug studied; no pharmacogenomic effect on inulin PK/PD is reported. |
| popPK | Bergman_1990 | irrelevant | 2 | 1 | Inulin is only a diffusion marker/comparator in a dog insulin-action study; no numeric inulin PK parameters are reported in the evidence. |
| popPK | Bhatnagar_2023 | irrelevant | 0 | 0 | Inulin is only a food-encapsulation ingredient (iron fortification study); no PK parameters for inulin are reported anywhere. |
| popPK | Blaser_2021 | irrelevant | 1 | 2 | Inulin is only a diagnostic GFR probe (inulin clearance measured as renal function marker); the PK parameters reported (Ka, V, half-life) are for metamizole metabolites and naproxen, not for inulin itself. |
| PGx | Blazquez_2012 | not_relevant | 0 | 0 | Inulin is used only as a co-injected marker in oocyte assays; no gene variant effect on inulin PK/PD is reported. |
| PGx | Bochud_2008 | not_relevant | 2 | 5 | ABCB1 variants are associated with renal function (GFR measured via inulin clearance), but inulin is only a GFR marker probe, not a drug whose PK/PD parameter is altered by genotype. |
| PGx | Chang_2023 | not_relevant | 0 | 0 | Inulin is a prebiotic fiber, not a drug; the paper reports microbiome/metagenomic responses by APOE genotype, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Charlton_2020 | not_relevant | 2 | 3 | LRP2 genotype affects disease phenotype and GFR measured via inulin clearance, but inulin is a diagnostic tracer, not a drug with PK/PD pharmacogenomic effect reported. |
| PGx | Charoenwongpaiboon_2023 | not_relevant | 0 | 5 | This is an in vitro enzyme engineering study of LrInu variants (FOS synthesis), not a pharmacogenomic effect on inulin PK/PD parameters. |
| popPK | Cousins_2002 | irrelevant | 2 | 1 | Inulin is only mentioned as a prior comparator; the study measures bromide and DTPA kinetics, with no numeric inulin parameters reported. |
| PGx | Desrosiers_2018 | not_relevant | 0 | 0 | Inulin is tested as a phytochemical affecting artemisinin permeability; no gene variant/genotype effect on inulin PK/PD is reported. |
| PGx | Dotsenko_2023 | not_relevant | 0 | 0 | Protein engineering of inulinase enzyme thermostability, not a pharmacogenomic effect on inulin PK/PD. |
| popPK | Duong_2021 | irrelevant | 0 | 0 | This is a review of population PK models for aminoglycosides (amikacin, gentamicin, tobramycin); inulin is not the subject drug and no inulin parameters appear. |
| popPK | Durbin_1989 | relevant | 6 | 3 | Inulin is one of the modeled tracers in a two-compartment PK analysis, but the abstract reports no numeric inulin parameter values (they presumably reside in the paper's tables/figures not provided). |
| PGx | Enokizono_2007 | not_relevant | 0 | 0 | Inulin is only used as a distribution marker; the pharmacogenomic effects (Bcrp knockout) are reported for phytoestrogens, not inulin. |
| PGx | Feng_2021 | not_relevant | 0 | 0 | Inulin is a dietary fiber, not a drug; the study reports microbiota changes by genotype/diet, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Gaspari_1997 | irrelevant | 0 | 0 | Inulin is only mentioned as the reference GFR marker; no PK parameters for inulin are reported. |
| popPK | Grenz_2006 | irrelevant | 1 | 1 | Inulin is only used as a GFR marker (inulin clearance), not a PK study of inulin disposition; no inulin PK parameters reported. |
| popPK | Grover_1983 | irrelevant | 0 | 0 | Inulin is only used as a [3H]inulin marker of vesicle exclusion volume in an in-vitro membrane preparation; no PK parameters for inulin. |
| PGx | Guo_2021 | not_relevant | 2 | 3 | Uox knockout is a disease model, not a pharmacogenomic variant affecting inulin PK/PD; no gene-variant effect on inulin parameters reported. |
| popPK | Hooper_2025 | irrelevant | 0 | 0 | This is a population PK study of iohexol and iopamidol; inulin is only mentioned as a filtration marker, with no inulin PK parameters reported. |
| popPK | Huisman-de_1995 | irrelevant | 2 | 4 | Inulin is only a GFR marker co-administered with amoxicillin, the subject drug; only inulin clearance (1.0 ± 0.3 ml/min) is reported, not disposition parameters for inulin as the drug. |
| PGx | Jin_2006 | not_relevant | 0 | 0 | Inulin is only a paracellular transport marker; no gene variant/genotype effect on its PK/PD is reported—temperature effects on MDR1 substrates only. |
| popPK | Johnson_2024 | irrelevant | 0 | 0 | This is a PK study of migalastat, not inulin; inulin does not appear as the subject drug and no inulin parameters are present. |
| popPK | Kartbayeva_2026 | irrelevant | 0 | 0 | This is a phytochemistry/pharmacology review of Cirsium species; inulin is only mentioned as a root carbohydrate, with no PK parameters for inulin. |
| PGx | Komatsu_2021 | not_relevant | 1 | 3 | Inulin is a dietary fiber, not a drug; genotype-dependent effects are on disease/metabolic endpoints, not on PK/PD parameters of inulin itself. |
| popPK | Li_2026 | irrelevant | 0 | 0 | This is a review of polysaccharide hydrogels for colorectal cancer; inulin is only mentioned as a plant polysaccharide material, with no PK parameters for inulin. |
| PGx | Martin_1996 | not_relevant | 0 | 0 | Renal dysfunction (not a gene variant/genotype/phenotype) affects reteplase PK; inulin is only a renal function marker, no pharmacogenomic effect reported. |
| popPK | Mi_2026 | irrelevant | 0 | 0 | This is a nanoparticle PK-PD database/ML study in tumor-bearing mice; inulin is not the subject drug and no inulin parameters appear. |
| PGx | Ni_2021 | not_relevant | 0 | 0 | Protein engineering of an inulosucrase enzyme, not a pharmacogenomic effect on inulin PK/PD. |
| popPK | Nielsen_1992 | irrelevant | 0 | 0 | The study concerns insulin (not inulin) processing in isolated proximal tubules; inulin appears only as a [14C]inulin tight-junction leak marker, with no inulin PK parameters. |
| popPK | Normand_1971 | irrelevant | 3 | 2 | Inulin is a permeability probe in foetal lamb lung; transfer/permeability constants are reported but no inulin disposition PK parameters (CL, V, half-life) with numeric values in the evidence. |
| popPK | Oda_2023 | irrelevant | 1 | 1 | Inulin is only used as an in-vitro hemodialysis validation probe; the PK model and parameters are for vancomycin, not inulin. |
| popPK | Pagano_2016 | irrelevant | 0 | 0 | This is a phytochemical characterization study measuring inulin content in artichoke by-products, with no pharmacokinetic parameters. |
| popPK | Peña-Espinoza_2020 | irrelevant | 0 | 0 | Inulin is only mentioned as an extraction by-product of chicory; no PK parameters for inulin are reported. |
| PGx | Poller_2008 | not_relevant | 0 | 0 | Inulin is used only as a paracellular permeability marker in a cell model; no gene variant/genotype effect on its PK/PD is reported. |
| PGx | Polyviou_2016 | not_relevant | 0 | 0 | No gene/genotype/pharmacogenomic factors are studied; effects relate to inulin propionate ester formulation, not genetic variants. |
| PGx | Reich_2003 | not_relevant | 3 | 4 | Inulin is used only as a clearance marker to measure GFR; the pharmacogenomic effect concerns angiotensin II response, not a PK/PD parameter of inulin itself. |
| popPK | Sherwin_1974 | irrelevant | 0 | 0 | This is a PK study of insulin, not inulin; inulin is only mentioned as a marker of extracellular space, so no inulin disposition parameters are reported. |
| PGx | Shimizu_2008 | not_relevant | 0 | 0 | Inulin is a permeability marker, not a drug; no gene variant effect on its PK/PD is reported. |
| PGx | Sobolev_2007 | not_relevant | 0 | 0 | This is a plant transgenesis study affecting inulin content in lettuce, not a pharmacogenomic effect on PK/PD of inulin as a drug. |
| popPK | Sugimoto_1993 | irrelevant | 3 | 6 | Inulin is only a comparator/probe; the subject drug is oxalate, though numeric inulin half-life, volume of distribution, and clearance values are present in the abstract. |
| PGx | VanWert_2008 | not_relevant | 0 | 0 | Inulin is only a clearance marker; the drug studied is methotrexate, and no gene variant effect on inulin PK/PD is reported. |
| popPK | Varma_1981 | relevant | 5 | 2 | Inulin PK (two-compartment clearance) in buffalo is the subject, but no numeric parameter values appear in the evidence. |
| PGx | Vautier_2009 | not_relevant | 0 | 0 | Inulin is used only as a vascular space marker to assess BBB integrity; no gene variant/genotype effect on inulin PK/PD is reported. |
| popPK | Verhagen_1994 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| popPK | Verkoelen_1999 | irrelevant | 0 | 0 | Inulin is only used as a radiolabeled water-transport marker in an in-vitro cell culture system; no PK disposition parameters for inulin are reported. |
| PGx | Windstetter_1997 | not_relevant | 3 | 4 | DF508 genotype affects creatinine clearance, not inulin PK/PD; inulin clearance showed no genotype-related difference. |
| popPK | Wu_2024 | irrelevant | 3 | 2 | Inulin is used only as a diagnostic GFR marker; the paper models GFR maturation, not inulin's own disposition, and no numeric inulin parameter values appear in the evidence (they live in figures/supplementary material). |
| PGx | Yao_2006 | not_relevant | 2 | 3 | Inulin is only a GFR marker; no gene-variant effect on inulin PK/PD parameters is reported. |
| popPK | Yuasa_1989 | irrelevant | 0 | 0 | The evidence contains no paper content at all, only GROBID metadata, so no inulin PK parameters are present. |
| PGx | Zeltner_2001 | not_relevant | 3 | 5 | GNB3 genotype showed no association with inulin clearance (GFR); only renal plasma flow (PAH) differed, and no fitted effect size for inulin PK/PD is reported. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | Study examines transporter-mediated inulin clearance in rats, not a gene variant/genotype effect on inulin PK/PD. |
| popPK | Zimmerman_2023 | irrelevant | 0 | 0 | The study reports population PK of levetiracetam, not inulin; inulin is not the subject drug. |
| popPK | van_1995 | irrelevant | 0 | 0 | Inulin is only used as a GFR marker; the PK parameters reported are for ceftazidime, not inulin. |
| popPK | van_2003 | irrelevant | 0 | 0 | This is an in-vitro enzyme kinetics study of an inulosucrase, not pharmacokinetics of inulin as a drug. |
| popPK | van_2004 | irrelevant | 0 | 0 | This is an enzymology paper about a bacterial levansucrase; "inulin" refers to a fructan polymer, not the drug, and no pharmacokinetic parameters are reported. |
| popPK | van_2026 | irrelevant | 0 | 0 | This is a population PK study of hydromethylthionine, not inulin; inulin does not appear as the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 22:24 UTC</sub>
