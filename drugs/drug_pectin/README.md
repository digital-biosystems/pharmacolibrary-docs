<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07B&quot;,&quot;href&quot;:&quot;atc/A07B.md&quot;},{&quot;label&quot;:&quot;pectin&quot;}]"></div>

# pectin

- **generic name:** pectin
- **ATC codes:** `A07BC01`
- **DrugBank:** [DB11158](https://go.drugbank.com/drugs/DB11158) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Pectin, a plant-derived polysaccharide, is used as an intestinal adsorbent to treat diarrhoea. It is an approved medicine and also approved for veterinary use, and is being investigated for other potential uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q188154](https://www.wikidata.org/wiki/Q188154) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:05 | 8:14 | 0/0/0 | 0/0/0 | 0/0/0 | 339,896/6,290 | ollama / qwen3.8:27b-mtp-q8_0 | 40 | 2/58 | 39/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pectin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 261 matched, 134 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fu_2014.pdf` | Fu Y et al., Bioaccumulation, subcellular, and molec…, Environmental science and p… (2014) | pd | 5 | [10.1007/s11356-013-2246-0](https://doi.org/10.1007/s11356-013-2246-0) | [24170501](https://www.ncbi.nlm.nih.gov/pubmed/24170501) | metadata signals extractable PD data (EC50) |
| `Akhtar_2025.pdf` | Akhtar M et al., Pectin (RG-1)-like polysaccharides isol…, International journal of bi… (2025) | pd | 4 | [10.1016/j.ijbiomac.2025.146784](https://doi.org/10.1016/j.ijbiomac.2025.146784) | [40812638](https://www.ncbi.nlm.nih.gov/pubmed/40812638) | metadata signals extractable PD data (IC50) |
| `Li_2023.pdf` | Li N et al., Phytic acid is a new substitutable plan…, Pesticide biochemistry and… (2023) | pd | 4 | [10.1016/j.pestbp.2023.105341](https://doi.org/10.1016/j.pestbp.2023.105341) | [36963923](https://www.ncbi.nlm.nih.gov/pubmed/36963923) | metadata signals extractable PD data (EC50) |
| `Manasa_2023.pdf` | Manasa V et al., Indigenous fungal strains isolation and…, 3 Biotech (2023) | pd | 4 | [10.1007/s13205-023-03811-9](https://doi.org/10.1007/s13205-023-03811-9) | [37997596](https://www.ncbi.nlm.nih.gov/pubmed/37997596) | metadata signals extractable PD data (EC50) |
| `Pires_2026.pdf` | Pires NV et al., Zein-Pectin Nanoparticles for Luteolin…, Journal of food science (2026) | pd | 4 | [10.1111/1750-3841.71326](https://doi.org/10.1111/1750-3841.71326) | [42521399](https://www.ncbi.nlm.nih.gov/pubmed/42521399) | metadata signals extractable PD data (IC50) |
| `Pu_2023.pdf` | Pu Y et al., Soluble polysaccharides decrease inhibi…, Food chemistry (2023) | pd | 4 | [10.1016/j.foodchem.2023.136013](https://doi.org/10.1016/j.foodchem.2023.136013) | [36989646](https://www.ncbi.nlm.nih.gov/pubmed/36989646) | metadata signals extractable PD data (IC50) |
| `Reginatto_2009.pdf` | Reginatto V et al., Biodegradation and ecotoxicological ass…, Journal of environmental sc… (2009) | pd | 4 | [10.1016/s1001-0742(08)62463-8](https://doi.org/10.1016/s1001-0742(08)62463-8) | [20108698](https://www.ncbi.nlm.nih.gov/pubmed/20108698) | metadata signals extractable PD data (EC50) |
| `Rjeibi_2019.pdf` | Rjeibi I et al., Structural characterization of water-so…, International journal of bi… (2019) | pd | 4 | [10.1016/j.ijbiomac.2019.02.049](https://doi.org/10.1016/j.ijbiomac.2019.02.049) | [30742925](https://www.ncbi.nlm.nih.gov/pubmed/30742925) | metadata signals extractable PD data (IC50) |
| `Shu_2025.pdf` | Shu Z et al., Improvement of interfacial, antioxidant…, International journal of bi… (2025) | pd | 4 | [10.1016/j.ijbiomac.2025.142091](https://doi.org/10.1016/j.ijbiomac.2025.142091) | [40089245](https://www.ncbi.nlm.nih.gov/pubmed/40089245) | metadata signals extractable PD data (IC50) |
| `Tian_2024.pdf` | Tian S et al., Structural analysis and biological acti…, International journal of bi… (2024) | pd | 4 | [10.1016/j.ijbiomac.2024.135249](https://doi.org/10.1016/j.ijbiomac.2024.135249) | [39226981](https://www.ncbi.nlm.nih.gov/pubmed/39226981) | metadata signals extractable PD data (IC50) |
| `Torres_2012.pdf` | Torres A, [Physical, chemical and bioactive compo…, Archivos latinoamericanos d… (2012) | pd | 4 | not captured | [24020259](https://www.ncbi.nlm.nih.gov/pubmed/24020259) | metadata signals extractable PD data (EC50) |
| `Yang_2024.pdf` | Yang L et al., Pectin-Coated Iron-Based Metal-Organic…, ACS nano (2024) | pd | 4 | [10.1021/acsnano.3c12352](https://doi.org/10.1021/acsnano.3c12352) | [38355215](https://www.ncbi.nlm.nih.gov/pubmed/38355215) | metadata signals extractable PD data (EC50) |
| `Zhang_2021.pdf` | Zhang H et al., Isolation, purification, structure and…, Carbohydrate polymers (2021) | pd | 4 | [10.1016/j.carbpol.2020.117078](https://doi.org/10.1016/j.carbpol.2020.117078) | [33142621](https://www.ncbi.nlm.nih.gov/pubmed/33142621) | metadata signals extractable PD data (IC50) |
| `Zhang_2025.pdf` | Zhang Z et al., Inhibition mechanism of pectin-modified…, Carbohydrate polymers (2025) | pd | 4 | [10.1016/j.carbpol.2025.123676](https://doi.org/10.1016/j.carbpol.2025.123676) | [40409817](https://www.ncbi.nlm.nih.gov/pubmed/40409817) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T18:59:46.908033+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adamberg_2018 | not_relevant | 0 | 0 | The paper studies the effect of dilution rate on gut microbiota composition and metabolism of pectin, not the effect of human gene variants on the pharmacokinetics or pharmacodynamics of pectin. |
| PGx | Adhikary_2021 | not_relevant | 0 | 0 | The paper investigates postharvest fruit quality and enzyme activity, not pharmacogenomics or PK/PD parameters of pectin. |
| popPK | Albert_1978 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of clindamycin in the presence of kaolin-pectin, not the pharmacokinetics of pectin itself. |
| PD | Alfatama_2024 | not_relevant | 3 | 3 | The paper reports an in vitro IC50 for thymoquinone (the drug) but does not provide a pharmacodynamic model, exposure-response relationship, or dose-effect curve for pectin itself. |
| popPK | Amer_2025 | irrelevant | 0 | 0 | The paper is a review on peptide delivery and does not report pharmacokinetic parameters for pectin. |
| PD | Amer_2025 | not_relevant | 0 | 0 | The paper is a review on peptide delivery systems and does not report any pharmacodynamic or exposure-response data for pectin. |
| PD | Balakrishnan_2020 | not_relevant | 3 | 2 | The paper reports a binding constant (Kd) for the nanoparticle ligand and an IC50 for the drug combination, but does not provide a pharmacodynamic exposure-response model or concentration-effect curve for pectin itself. |
| PGx | Baldwin_2014 | not_relevant | 0 | 0 | The paper investigates plant cell wall pectin metabolism in response to cold stress, not the pharmacokinetics or pharmacodynamics of a drug named pectin. |
| PGx | Barbey_2019 | not_relevant | 0 | 0 | The paper studies genetic variants affecting gene expression related to pectin metabolism in strawberries, not the pharmacokinetics or pharmacodynamics of pectin as a drug in humans. |
| PD | Castro_2024 | not_relevant | 0 | 0 | The paper reports in vitro antioxidant (IC50) and antimicrobial (MBC) activities of grape seed extracts, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for pectin or the extract in a biological system. |
| PGx | Chandran_2008 | not_relevant | 0 | 0 | The paper studies aluminum toxicity in plants and does not involve human pharmacogenomics or the drug pectin. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper studies plant transcriptomics in citrus cultivars and does not involve human pharmacogenomics or the pharmacokinetics/pharmacodynamics of pectin. |
| popPK | Chen_2025_2 | irrelevant | 0 | 0 | The paper investigates the antifungal activity of dehydroabietic acid against fungi and mentions pectin lyase as an enzyme, but does not study the pharmacokinetics of pectin. |
| PGx | Coutinho_2021 | not_relevant | 0 | 0 | The paper discusses pectin metabolism in soybean cell walls under drought stress, not the pharmacokinetics or pharmacodynamics of pectin as a drug. |
| PD | Cui_2022 | not_relevant | 3 | 2 | The paper reports an in vitro IC50 for antioxidant activity and a single-dose in vivo effect on gut microbiota, but lacks a formal pharmacodynamic model, dose-response curve fitting, or PK/PD analysis for the drug pectin. |
| PD | Dambuza_2024 | not_relevant | 0 | 0 | The paper reports physicochemical characterization and a single in vitro antioxidant IC50 value, but does not contain any pharmacokinetic data, exposure-response modeling, or dose-response curves for pectin. |
| popPK | Dantas_2021 | irrelevant | 0 | 0 | The paper is a review of okra mucilage as a functional food and does not report pharmacokinetic parameters for pectin. |
| PD | Dantas_2021 | not_relevant | 0 | 0 | The paper is a review of okra mucilage's physicochemical properties and applications, containing no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| PGx | Dao_2025 | not_relevant | 0 | 0 | The paper studies plant genetics and insect resistance mechanisms involving pectin-degrading enzymes, not human pharmacogenomics or drug pharmacokinetics. |
| PGx | Deng_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacological effects of pectin on uric acid metabolism and inflammation but does not report any pharmacogenomic effects (gene variant/genotype interactions) on PK or PD parameters. |
| PGx | Diarte_2021 | not_relevant | 0 | 0 | The paper studies cell wall modifications and pectin metabolism in olive fruit ripening, not the pharmacokinetics or pharmacodynamics of pectin as a drug in humans. |
| PD | Djerri_2025 | not_relevant | 0 | 0 | The paper focuses on the encapsulation of lemon essential oil in pectin and its application in food preservation, reporting no pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or dose-response curves for pectin itself. |
| popPK | Dodda_2026 | irrelevant | 0 | 0 | The paper describes the material science and in vitro biocompatibility of composite films, containing no pharmacokinetic data for pectin. |
| PD | Dodda_2026 | not_relevant | 0 | 0 | The paper characterizes the mechanical and biological properties of PCL/MXene/gelatin composite films and does not involve pectin or report any pharmacodynamic or exposure-response relationships. |
| popPK | Domínguez_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rutin, not pectin. |
| PD | Domínguez_2021 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PK) modeling of rutin and quercetin, but it does not report any pharmacodynamic (PD) or exposure-response relationship, nor does it provide numeric PD parameters (e.g., Emax, EC50). |
| PD | Dubey_2020 | not_relevant | 2 | 1 | The paper reports a qualitative pharmacodynamic outcome (IOP lowering) in a rabbit model but does not provide numeric PD parameters (Emax, EC50) or an exposure-response curve. |
| PGx | Dupont_1988 | not_relevant | 0 | 0 | The paper studies the effect of pectin on hepatic HMGR activity in mice, not the pharmacokinetics or pharmacodynamics of pectin itself. |
| popPK | Fu_2014 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| PD | Fu_2014 | not_relevant | 0 | 0 | The paper investigates the toxicology of yttrium in plants, not the pharmacodynamics of pectin. |
| popPK | Gomaa_2021 | irrelevant | 0 | 0 | The study focuses on vardenafil, not pectin, and does not report pharmacokinetic parameters for pectin. |
| PD | Gomaa_2021 | not_relevant | 0 | 0 | The paper focuses on the formulation and release kinetics of vardenafil jellies, not on pectin pharmacodynamics, and does not report any exposure-response or dose-response parameters for pectin. |
| popPK | Gomez-Ramirez_2021 | irrelevant | 0 | 0 | The paper is a systematic review on gastric dysbiosis and H. pylori, containing no pharmacokinetic data for pectin. |
| PD | Gomez-Ramirez_2021 | not_relevant | 0 | 0 | The paper is a systematic review on gastric dysbiosis and H. pylori, containing no pharmacodynamic or exposure-response analysis for pectin. |
| popPK | Huang_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of busulfan, not pectin. |
| PGx | Iskandar_2026 | not_relevant | 0 | 0 | The paper is a review on pectin as a cancer-targeting nanovehicle and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Islam_2022 | irrelevant | 0 | 0 | The paper is a review on immune system rejuvenation and does not contain any pharmacokinetic data for pectin. |
| PD | Islam_2022 | not_relevant | 0 | 0 | The paper is a general review on immune system rejuvenation and does not contain any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for pectin. |
| popPK | Israni_2026 | irrelevant | 0 | 0 | The paper is a review of anti-inflammatory compounds and does not report pharmacokinetic parameters for pectin. |
| PD | Israni_2026 | not_relevant | 0 | 0 | The paper is a general review of anti-inflammatory bioactive compounds and does not report specific pharmacodynamic or exposure-response data for pectin. |
| popPK | Jach_2026 | irrelevant | 0 | 0 | The paper is a narrative review on probiotic-phytochemical synergy and does not report quantitative pharmacokinetic parameters for pectin. |
| PD | Jach_2026 | not_relevant | 1 | 0 | The paper is a narrative review of probiotic-phytochemical synergy and does not report specific pharmacokinetic or pharmacodynamic data, exposure-response curves, or numeric PD parameters for pectin. |
| popPK | Ji_2024 | irrelevant | 0 | 0 | The study investigates the antifungal mechanism of nerol on fungi, where pectin lyase is only mentioned as a fungal enzyme, not as a drug subject to pharmacokinetic analysis. |
| PGx | Jiang_2026 | not_relevant | 0 | 0 | The paper investigates plant physiology (rice response to aluminum toxicity) and does not involve human pharmacogenomics or the pharmacokinetics/pharmacodynamics of pectin as a drug. |
| PGx | Kan_2016 | not_relevant | 0 | 0 | The paper studies cadmium accumulation in plant roots and does not involve human pharmacogenomics or the drug pectin. |
| popPK | Karpe_2026 | irrelevant | 0 | 0 | The paper is a review of clotrimazole's anticancer properties and does not contain any pharmacokinetic data for pectin. |
| PD | Karpe_2026 | not_relevant | 0 | 0 | The paper is a review of clotrimazole (not pectin) and does not report specific numeric PD parameters or exposure-response relationships. |
| PGx | Labourel_2019 | not_relevant | 0 | 0 | The paper describes the structural and functional analysis of a microbial enzyme (GH138) that degrades pectin, not a pharmacogenomic effect on the PK/PD of a drug. |
| PGx | Lan_2021 | not_relevant | 0 | 0 | The paper studies plant physiology (aluminum tolerance in rice) and does not involve human pharmacogenomics or the drug pectin. |
| popPK | Li_2023 | irrelevant | 0 | 0 | no_text gate: only 153 chars of text extracted (&lt; 400) |
| PD | Li_2023 | not_relevant | 0 | 0 | The paper focuses on phytic acid, not pectin, and does not report pharmacodynamic or exposure-response relationships for pectin. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The study focuses on pectin as a coating material for a drug delivery system (nanocarrier) for cymophenol, not on the pharmacokinetics of pectin itself. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a review on polysaccharide hydrogels for colorectal cancer treatment and does not report pharmacokinetic parameters for pectin. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper is a review of natural polysaccharide hydrogels for colorectal cancer and does not report any specific pharmacodynamic or exposure-response data for pectin. |
| PGx | Liang_2022 | not_relevant | 0 | 0 | The paper investigates plant physiology (aluminum toxicity in wheat) and pectin demethylation, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of a drug. |
| PGx | Lin_2023 | not_relevant | 0 | 0 | The paper investigates the genetic basis of grape berry texture (a plant trait) and mentions pectin as a structural component, but it does not report pharmacokinetic or pharmacodynamic effects of pectin as a drug in humans or animals. |
| PGx | Lin_2024 | not_relevant | 0 | 0 | The paper discusses plant physiology and aluminum resistance in Stylosanthes, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of pectin as a drug. |
| PGx | Lu_2021 | not_relevant | 0 | 0 | The paper investigates cadmium accumulation in wheat genotypes and mentions pectin as a binding agent for cadmium, but it does not report pharmacokinetic or pharmacodynamic parameters of pectin as a drug. |
| popPK | Mahmood_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of metformin HCl, not pectin. |
| PD | Mahmood_2025 | not_relevant | 0 | 0 | The paper focuses on PK prediction using a PBPK model for metformin and does not report any pharmacodynamic (PD) or exposure-response relationship. |
| popPK | Manasa_2023 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PD | Manasa_2023 | not_relevant | 0 | 0 | The paper focuses on the isolation and molecular identification of fungal strains for pectic oligosaccharide production, containing no pharmacodynamic or exposure-response data. |
| PGx | Merchante_2013 | not_relevant | 0 | 0 | The paper studies ethylene signaling in strawberry fruit ripening and pectin metabolism, not the pharmacokinetics or pharmacodynamics of pectin as a drug in humans. |
| PGx | Michailidis_2021 | not_relevant | 0 | 0 | The paper investigates fruit cracking in sweet cherries and pectin metabolism in plants, not the pharmacokinetics or pharmacodynamics of pectin as a drug in humans. |
| PD | Mihalcea_2021 | not_relevant | 0 | 0 | The paper focuses on the microencapsulation of sea buckthorn oleoresins using whey protein and pectin, reporting physicochemical properties and in vitro digestion release profiles, but contains no pharmacodynamic or exposure-response analysis for pectin. |
| PGx | Mota_2024 | not_relevant | 0 | 0 | The paper investigates the genetic basis of quality traits (starch, texture, color) in the plant Dioscorea alata, not the pharmacokinetics or pharmacodynamics of pectin as a drug in humans. |
| PD | Mwaheb_2025 | not_relevant | 0 | 0 | The paper focuses on the production, optimization, and purification of fungal pectinase, not on the pharmacodynamics of pectin as a drug; the reported IC50 is for the enzyme's cytotoxicity, not a drug effect. |
| popPK | Nakamura_2024 | irrelevant | 0 | 0 | Pectin is used as a formulation excipient (jelly base) to study the absorption of other drugs (antipyrine, metoprolol, atenolol), not as the subject drug itself. |
| popPK | Neubert_1995 | irrelevant | 0 | 0 | The study is an in-vitro investigation of pectin's effect on propranolol transport, not a pharmacokinetic study of pectin itself. |
| PD | Nguyen_1981 | not_relevant | 2 | 1 | The paper describes qualitative dose-response trends and bioavailability effects of pectin on pyridoxine but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | Nureye_2025 | irrelevant | 0 | 0 | The paper is a review of medicinal plants for hypertension and does not report pharmacokinetic parameters for pectin. |
| PD | Nureye_2025 | not_relevant | 0 | 0 | The paper is a review of medicinal plants for hypertension in Ethiopia and does not report any pharmacodynamic or exposure-response analysis for pectin. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not contain any pharmacokinetic data for pectin. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The text is a general review of radiomitigators and does not contain any specific pharmacodynamic or exposure-response data for pectin. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report pharmacokinetic parameters for pectin. |
| PD | Olechno_2025 | not_relevant | 0 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report any pharmacodynamic or exposure-response data for pectin. |
| popPK | Omidian_2023 | irrelevant | 0 | 0 | The paper is a review of curcumin delivery systems and does not contain pharmacokinetic data for pectin. |
| PD | Omidian_2023 | not_relevant | 0 | 0 | The paper is a review on curcumin delivery systems and does not report any pharmacodynamic or exposure-response data for pectin. |
| popPK | Papadopoulou_2025 | irrelevant | 0 | 0 | The paper is a review on marine bioactives for cosmetics and does not contain pharmacokinetic data for pectin. |
| PD | Papadopoulou_2025 | not_relevant | 0 | 0 | The paper is a review on marine by-products for cosmetics and does not report any pharmacodynamic or exposure-response data for pectin. |
| popPK | Pawaskar_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of garadacimab (a monoclonal antibody), not pectin. |
| PGx | Pereira_2024 | not_relevant | 0 | 0 | The paper is a comparative proteomic study of papaya flower development and does not involve pharmacokinetics, pharmacodynamics, or drug response. |
| PD | Pires_2026 | not_relevant | 0 | 0 | The paper reports physicochemical characterization and in vitro antioxidant activity (IC50) of nanoparticles, but does not contain any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or dose-response relationship for pectin in a biological system. |
| PGx | Prakash_2024 | not_relevant | 0 | 0 | The paper investigates the genetic basis of prolificacy in maize and mentions pectin biosynthesis genes in a plant context, but does not report pharmacogenomic effects on the PK or PD of pectin as a drug. |
| PGx | Quiroz-Figueroa_2023 | not_relevant | 0 | 0 | The paper studies plant pathology (maize resistance to fungal infection) and cell wall genes, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of pectin as a drug. |
| PGx | Rangel_2009 | not_relevant | 0 | 0 | The paper studies aluminum toxicity in plants, not the pharmacokinetics or pharmacodynamics of pectin in humans. |
| popPK | Reginatto_2009 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| PD | Reginatto_2009 | not_relevant | 0 | 0 | The paper focuses on the biodegradation and ecotoxicology of wastewater, not on the pharmacodynamic or exposure-response relationship of pectin as a drug. |
| PD | Ristow_1982 | not_relevant | 3 | 1 | The study reports qualitative dose-response trends (growth reduction) but provides no numeric PD parameters (Emax, EC50) or extractable concentration-effect curves for pectin. |
| popPK | Salamat_2026 | irrelevant | 0 | 0 | The paper is a review of chitosan-based hydrogels and does not report pharmacokinetic parameters for pectin. |
| PD | Salamat_2026 | not_relevant | 0 | 0 | The paper is a review of chitosan-based hydrogels and does not report any pharmacodynamic or exposure-response data for pectin. |
| popPK | Sarkar_2023 | irrelevant | 0 | 0 | The paper is a review of nanoparticulate formulations for chemotherapeutics (paclitaxel, doxorubicin) and does not study pectin or report its pharmacokinetic parameters. |
| PD | Sarkar_2023 | not_relevant | 0 | 0 | The paper is a review of pharmacokinetics of nanoparticulate formulations for chemotherapeutics (paclitaxel, doxorubicin) and does not report any pharmacodynamic or exposure-response data for pectin. |
| popPK | Segneanu_2026 | irrelevant | 0 | 0 | The paper is a review of plant-derived nanocarriers and does not report quantitative pharmacokinetic parameters for pectin. |
| PD | Segneanu_2026 | not_relevant | 0 | 0 | The paper is a review of plant-derived nanocarriers and does not report specific pharmacodynamic or exposure-response data for pectin. |
| PD | Shivalingamurthy_2018 | not_relevant | 3 | 3 | The paper reports an IC50 for an enzyme inhibitor (ShINH1) against invertase, which is a biochemical potency parameter, not a pharmacodynamic exposure-response relationship for a drug in a biological system. |
| PD | Shu_2025 | not_relevant | 0 | 0 | The paper reports physicochemical and functional properties (antioxidant IC50, emulsification indices) of a pectin-surfactin conjugate, not a pharmacodynamic exposure-response or dose-response relationship for a drug in a biological system. |
| popPK | Silva_2019 | irrelevant | 0 | 0 | The study investigates the enzymatic hydrolysis kinetics of pectin in juice (in vitro/biochemical), not the pharmacokinetics of pectin as a drug in a biological system. |
| PD | Silva_2019 | not_relevant | 0 | 0 | The paper describes enzyme kinetics (Michaelis-Menten/Hill) for pectin hydrolysis, not pharmacodynamic exposure-response or dose-response relationships for a drug in a biological system. |
| PGx | Singh_2024 | not_relevant | 0 | 0 | The paper discusses the role of a pectin methylesterase gene in the biosynthesis of vindoline in plants, not the pharmacogenomics of pectin as a drug. |
| popPK | Sreekumar_2022 | irrelevant | 0 | 0 | The paper focuses on the biotechnological production and physicochemical properties of chitosan, not the pharmacokinetics of pectin. |
| PD | Sreekumar_2022 | not_relevant | 0 | 0 | The paper focuses on the physicochemical and biological properties of chitosan polymers (antimicrobial, transfection, rheology) and does not report any pharmacokinetic or pharmacodynamic modeling (e.g., Emax, EC50) for pectin or any other drug. |
| PGx | Su_2017 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy of H. pylori eradication regimens, not the pharmacokinetics or pharmacodynamics of pectin itself. |
| popPK | Suleymanov_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levofloxacin, not pectin. |
| PD | Suleymanov_2026 | not_relevant | 0 | 0 | The paper describes the development and validation of a spectrophotometric assay for levofloxacin in rat plasma and does not report any pharmacodynamic or exposure-response data. |
| PGx | Sun_2020 | not_relevant | 0 | 0 | The paper studies melatonin's effect on aluminum toxicity in wheat, not the pharmacogenomics of pectin. |
| PGx | Tan_2025 | not_relevant | 0 | 0 | The paper studies bamboo plant biology and pectin biosynthesis in cell walls, not the pharmacokinetics or pharmacodynamics of pectin as a drug in humans. |
| popPK | Torres_2012 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Torres_2012 | not_relevant | 0 | 0 | The paper is a review of the physical, chemical, and bioactive compounds of tree tomato and does not report any pharmacokinetic or pharmacodynamic modeling or exposure-response analysis for pectin. |
| popPK | Troches-Mafla_2025 | irrelevant | 0 | 0 | The paper is a review of diltiazem hydrochloride formulations and does not study pectin as the subject drug. |
| PD | Troches-Mafla_2025 | not_relevant | 0 | 0 | The paper is a review of formulation technologies for diltiazem and does not report any pharmacodynamic or exposure-response data for pectin. |
| PGx | Vandermeulen_2023 | not_relevant | 0 | 0 | The paper studies yeast signaling pathways and pectin as an environmental inducer, not the pharmacokinetics or pharmacodynamics of pectin as a drug in humans. |
| PD | Wang_2023 | not_relevant | 0 | 0 | The paper focuses on the extraction and characterization of blackberry seed proteins, not pectin, and does not report any pharmacodynamic or exposure-response relationships. |
| PD | Wang_2024 | not_relevant | 1 | 0 | The paper describes the chemical structure and qualitative synergistic effects of polysaccharides but does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50). |
| PGx | Wildhagen_2018 | not_relevant | 0 | 0 | The paper studies plant genetics and wood saccharification, not pharmacogenomics or drug PK/PD. |
| PGx | Wu_2021 | not_relevant | 0 | 0 | The paper discusses cadmium accumulation in plants and pectin as a cell wall component, not the pharmacokinetics or pharmacodynamics of pectin as a drug. |
| PGx | Wu_2025 | not_relevant | 0 | 0 | The paper investigates plant physiology (cotton roots) and copper stress, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of pectin as a drug. |
| PGx | Wu_2025_2 | not_relevant | 0 | 0 | The paper investigates cadmium accumulation in rice and the role of pectin in cell walls, not the pharmacokinetics or pharmacodynamics of pectin as a drug in humans. |
| PGx | Wu_2025_3 | not_relevant | 0 | 0 | The paper studies copper toxicity tolerance in cotton plants, not the pharmacokinetics or pharmacodynamics of pectin in humans. |
| PGx | Xiong_2009 | not_relevant | 0 | 0 | The paper studies plant physiology (rice/cadmium) and does not involve human pharmacogenomics or the drug pectin. |
| PGx | Xue_2026 | not_relevant | 0 | 0 | The paper investigates plant genetics and disease resistance in rapeseed, not human pharmacogenomics or drug pharmacokinetics. |
| PGx | Yan_2022 | not_relevant | 0 | 0 | The paper investigates plant physiology (aluminum tolerance in rice) and cell wall composition, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of pectin as a drug. |
| PGx | Yan_2024 | not_relevant | 0 | 0 | The paper studies plant physiology and salt stress in rapeseed, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of pectin as a drug. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PD | Yang_2024 | not_relevant | 0 | 0 | The paper focuses on the material science of pectin-coated nanoparticles for fungicide delivery and adhesion, not on the pharmacodynamic or exposure-response relationship of pectin itself as a drug. |
| PGx | Yang_2024_2 | not_relevant | 0 | 0 | The paper analyzes pectin degradation in strawberries as a plant metabolic process, not the pharmacokinetics or pharmacodynamics of pectin as a drug in humans. |
| popPK | Ye_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and fungicidal efficacy of a pectin-based nanoparticle delivery system for a plant pathogen, not the pharmacokinetics of pectin in a biological host. |
| popPK | Yip_2023 | irrelevant | 0 | 0 | The paper investigates the microbiome and antibiotic effects on bacterial growth, not the pharmacokinetics of pectin. |
| PD | Yip_2023 | not_relevant | 0 | 0 | The paper investigates the microbiome and nutrient/metabolite dynamics affecting bacterial growth, not the pharmacodynamics of pectin. |
| PGx | Zhang_2011 | not_relevant | 0 | 0 | The paper studies plant physiology (rice roots) and aluminum tolerance, not human pharmacogenomics or the pharmacokinetics/pharmacodynamics of pectin as a drug. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The paper investigates the antifungal mechanism of phenazine-1-carboxamide against Botrytis cinerea, where pectin is only mentioned as a substrate for enzyme activity assays, not as a drug subject to pharmacokinetic analysis. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and exposure-response of C1-inhibitor (C1-INH) for hereditary angioedema, not pectin. |
| PGx | Zhang_2019 | not_relevant | 0 | 0 | The paper studies cadmium toxicity in rapeseed plants, not the pharmacokinetics or pharmacodynamics of pectin in humans. |
| PGx | Zhang_2020 | not_relevant | 0 | 0 | The paper analyzes transcriptomic responses to salinity in plants and mentions pectin biosynthesis genes, but does not report pharmacokinetic or pharmacodynamic effects of pectin as a drug. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper investigates the antifungal mechanism of a thymol coating on Mucor circinelloides in okra, not the pharmacokinetics of pectin. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | Zhang_2025 | not_relevant | 0 | 0 | The paper focuses on the biological mechanism of pectin-modified nano-selenium against a plant pathogen, not on pharmacodynamic modeling or exposure-response relationships for a drug in a biological system. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study focuses on the formulation of a nanopesticide using pectin as a coating material for plant protection, not on the pharmacokinetics of pectin as a drug. |
| PGx | Zhao_2026 | not_relevant | 0 | 0 | The paper describes the computational design of an enzyme (pectate lyase) for industrial biomass processing, not a pharmacogenomic study of pectin as a drug in humans. |
| PGx | Zheng_2026 | not_relevant | 0 | 0 | The paper studies plant physiology and transcriptomics in sunflower under stress, not human pharmacogenomics or drug PK/PD. |
| PGx | Zhou_2012 | not_relevant | 0 | 0 | The paper studies plant physiology (Aluminum toxicity in rice bean) and does not involve human pharmacogenomics or the drug pectin. |
| PGx | Zhu_2010 | not_relevant | 0 | 0 | The paper discusses pectin methylesterase gene expression in plant male sterility, not the pharmacokinetics or pharmacodynamics of pectin as a drug. |
| popPK | Zupančič_2026 | irrelevant | 0 | 0 | Pectin is only a minor ingredient (0.8g) in the control mixture (ISO) used to match fiber content, and the study measures muscle protein synthesis and amino acid kinetics, not the pharmacokinetics of pectin itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
