<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;saquinavir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Saquinavir_Dickinson2009_reference&quot;,&quot;label&quot;:&quot;Dickinson_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_saquinavir/Saquinavir_Dickinson2009_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Saquinavir_Ren2022_reference&quot;,&quot;label&quot;:&quot;Ren_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_saquinavir/Saquinavir_Ren2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# saquinavir

- **generic name:** saquinavir
- **ATC codes:** `J05AE01`
- **DrugBank:** [DB01232](https://go.drugbank.com/drugs/DB01232) · **PubChem:** [CID 441243](https://pubchem.ncbi.nlm.nih.gov/compound/441243)
- **molar mass:** 670.8408 g/mol (C38H50N6O5) — DrugBank
- **groups:** approved

## About

Saquinavir is a protease inhibitor antiviral drug used to treat HIV infection and HIV/AIDS. It is an approved medicine and has been included on the WHO essential medicines list, although its marketing authorisations in the European Union have been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422654](https://www.wikidata.org/wiki/Q422654) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| saquinavir | parent | 670.841 | C38H50N6O5 | DrugBank | [441243](https://pubchem.ncbi.nlm.nih.gov/compound/441243) | Dickinson_2008, Lavielle_2007 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:22 | 14:09 | 2/1/2 | 6/0/0 | 0/0/0 | 1,012,616/45,122 | ollama / glm-5.3-flash | 21 | 0/20 | 20/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Dickinson_2009_reference](drugs/drug_saquinavir/Saquinavir_Dickinson2009_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Dickinson L et al., Population pharmacokinetics of ritonavi…, The Journal of antimicrobia… (2009) | [10.1093/jac/dkp102](https://doi.org/10.1093/jac/dkp102) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ren_2022_reference](drugs/drug_saquinavir/Saquinavir_Ren2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ren T et al., Pharmacodynamic model of slow reversibl…, Journal of pharmacokinetics… (2022) | [10.1007/s10928-022-09822-y](https://doi.org/10.1007/s10928-022-09822-y) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Dickinson_2008_reference](drugs/drug_saquinavir/Saquinavir_Dickinson2008_reference.md) | — | 1-compartment (no model) | 4 | Dickinson L et al., Population pharmacokinetics of ritonavi…, The Journal of antimicrobia… (2008) | [10.1093/jac/dkn399](https://doi.org/10.1093/jac/dkn399) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Lavielle_2007_reference](drugs/drug_saquinavir/Saquinavir_Lavielle2007_reference.md) | — | 1-compartment (no model) | 4 | Lavielle M et al., Estimation of population pharmacokineti…, Journal of pharmacokinetics… (2007) | [10.1007/s10928-006-9043-z](https://doi.org/10.1007/s10928-006-9043-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hsu_1998_reference](drugs/drug_saquinavir/Saquinavir_Hsu1998_reference.md) | — | 1-compartment (no model) | 0 | Hsu A et al., Pharmacokinetic interactions between tw…, Clinical pharmacology and t… (1998) | [10.1016/S0009-9236(98)90041-8](https://doi.org/10.1016/S0009-9236(98)90041-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gieschke_1999_CD4](drugs/drug_saquinavir/pd_Gieschke_1999_CD4.md) | CD4+ cell count ← saquinavir · model not identified | — | Gieschke R et al., Relationships between exposure to saqui…, Clinical pharmacokinetics (1999) | [10.2165/00003088-199937010-00005](https://doi.org/10.2165/00003088-199937010-00005) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">in vitro</span> | [Lueangaramkul_2026_3CLpro_IC50](drugs/drug_saquinavir/pd_Lueangaramkul_2026_3CLpro_IC50.md) | Intracellular FIPV 3CLpro activity (Fluc/Rluc ratio) ← saquinavir · direct sigmoid Emax (Hill) effect | — | Lueangaramkul V et al., Repurposing FDA-Approved Drugs as Poten…, ACS pharmacology & translat… (2026) | [10.1021/acsptsci.6c00016](https://doi.org/10.1021/acsptsci.6c00016) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">in vitro</span> | [Lueangaramkul_2026_IPMA_EC50](drugs/drug_saquinavir/pd_Lueangaramkul_2026_IPMA_EC50.md) | FIPV infection (antiviral activity, IPMA) ← saquinavir · direct sigmoid Emax (Hill) effect | — | Lueangaramkul V et al., Repurposing FDA-Approved Drugs as Poten…, ACS pharmacology & translat… (2026) | [10.1021/acsptsci.6c00016](https://doi.org/10.1021/acsptsci.6c00016) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.90).">in vitro</span> | [Lueangaramkul_2026_RT_qPCR_EC50](drugs/drug_saquinavir/pd_Lueangaramkul_2026_RT_qPCR_EC50.md) | Viral RNA load (RT-qPCR) ← saquinavir · direct sigmoid Emax (Hill) effect | — | Lueangaramkul V et al., Repurposing FDA-Approved Drugs as Poten…, ACS pharmacology & translat… (2026) | [10.1021/acsptsci.6c00016](https://doi.org/10.1021/acsptsci.6c00016) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sato_2017_OATP4C1_mediated_T3_transport](drugs/drug_saquinavir/pd_Sato_2017_OATP4C1_mediated_T3_transport.md) | OATP4C1-mediated triiodothyronine transport ← saquinavir · inhibition effect | — | Sato T et al., Potential Drug Interactions Mediated by…, The Journal of pharmacology… (2017) | [10.1124/jpet.117.241703](https://doi.org/10.1124/jpet.117.241703) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ueno_2021_CYP3A4_activity](drugs/drug_saquinavir/pd_Ueno_2021_CYP3A4_activity.md) | CYP3A4 activity (midazolam metabolism in Caco-2 cells) ← saquinavir · inhibition effect | — | Ueno T et al., Evaluation system for cell-permeable CY…, Xenobiotica; the fate of fo… (2021) | [10.1080/00498254.2021.1925375](https://doi.org/10.1080/00498254.2021.1925375) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vanhove_1997_CD4](drugs/drug_saquinavir/pd_Vanhove_1997_CD4.md) | maximum increase in CD4+ cell count ← saquinavir · direct linear effect | — | Vanhove GF et al., Exposure-response relationships for saq…, Antimicrobial agents and ch… (1997) | [10.1128/AAC.41.11.2433](https://doi.org/10.1128/AAC.41.11.2433) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vanhove_1997_PBMC_titer](drugs/drug_saquinavir/pd_Vanhove_1997_PBMC_titer.md) | quantitative peripheral blood monononuclear cell (PBMC) titer decrease ← saquinavir · direct linear effect | — | Vanhove GF et al., Exposure-response relationships for saq…, Antimicrobial agents and ch… (1997) | [10.1128/AAC.41.11.2433](https://doi.org/10.1128/AAC.41.11.2433) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vanhove_1997_RNA](drugs/drug_saquinavir/pd_Vanhove_1997_RNA.md) | maximum decrease in RNA in plasma ← saquinavir · direct linear effect | — | Vanhove GF et al., Exposure-response relationships for saq…, Antimicrobial agents and ch… (1997) | [10.1128/AAC.41.11.2433](https://doi.org/10.1128/AAC.41.11.2433) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2005_UGT1A1](drugs/drug_saquinavir/pd_Zhang_2005_UGT1A1.md) | UGT1A1 activity (human cDNA-expressed UGT1A1, bilirubin glucuronidation inhibition) ← saquinavir · inhibition effect | — | Zhang D et al., In vitro inhibition of UDP glucuronosyl…, Drug metabolism and disposi… (2005) | [10.1124/dmd.105.005447](https://doi.org/10.1124/dmd.105.005447) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2005_UGT1A1_2](drugs/drug_saquinavir/pd_Zhang_2005_UGT1A1_2.md) | UGT1A1 activity (human liver microsomes, bilirubin glucuronidation inhibition) ← saquinavir · inhibition effect | — | Zhang D et al., In vitro inhibition of UDP glucuronosyl…, Drug metabolism and disposi… (2005) | [10.1124/dmd.105.005447](https://doi.org/10.1124/dmd.105.005447) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gieschke_1999_HIV_RNA](drugs/drug_saquinavir/pd_Gieschke_1999_HIV_RNA.md) | plasma HIV RNA level ← saquinavir · direct Emax (saturable) effect | model (no simulator) | Gieschke R et al., Relationships between exposure to saqui…, Clinical pharmacokinetics (1999) | [10.2165/00003088-199937010-00005](https://doi.org/10.2165/00003088-199937010-00005) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=saquinavir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor, `SLCO1A2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` unknown, `ORM1` unknown | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` inhibitor/substrate, `SLC22A1` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate, `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 477 matched, 174 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 5  ·  extracted 2  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dickinson_2008.pdf` | Dickinson L et al., Population pharmacokinetics of ritonavi…, The Journal of antimicrobia… (2008) | popPK | 10 | [10.1093/jac/dkn399](https://doi.org/10.1093/jac/dkn399) | [18824460](https://pubmed.ncbi.nlm.nih.gov/18824460) | Population PK model of saquinavir with numeric CL/F values (89.0, 49.8, 26.7 L/h) reported directly in the abstract. |
| `Lavielle_2007.pdf` | Lavielle M et al., Estimation of population pharmacokineti…, Journal of pharmacokinetics… (2007) | popPK | 10 | [10.1007/s10928-006-9043-z](https://doi.org/10.1007/s10928-006-9043-z) | [17211713](https://pubmed.ncbi.nlm.nih.gov/17211713) | Population PK model of saquinavir in HIV patients with CL/F value (1.26 L/h) reported in abstract; other parameters may be in figures/tables not shown. |
| `Lledó-García_2011.pdf` | Lledó-García R et al., A pharmacokinetic model for evaluating…, Drug metabolism and disposi… (2011) | popPK | 10 | [10.1124/dmd.110.034488](https://doi.org/10.1124/dmd.110.034488) | [20978105](https://pubmed.ncbi.nlm.nih.gov/20978105) | Population PK (NONMEM) model of saquinavir in rats, but numeric parameter values are not shown in the evidence provided (likely in tables/figures not included). |
| `Trout_2004.pdf` | Trout H et al., Enhanced saquinavir exposure in human i…, Antimicrobial agents and ch… (2004) | popPK | 9 | [10.1128/AAC.48.2.538-545.2004](https://doi.org/10.1128/AAC.48.2.538-545.2004) | [14742207](https://pubmed.ncbi.nlm.nih.gov/14742207) | Population PK of saquinavir in HIV patients with CL/F, V/F, ka estimated, but the numeric parameter values (beyond AUCs) are not present in the provided evidence. |
| `Caon_2017.pdf` | Caon T et al., Pharmacokinetics of Saquinavir Mesylate…, European journal of drug me… (2017) | popPK | 8 | [10.1007/s13318-016-0321-x](https://doi.org/10.1007/s13318-016-0321-x) | [26846485](https://pubmed.ncbi.nlm.nih.gov/26846485) | Compartmental PK of saquinavir in Beagle dogs is reported, but the numeric parameter values are not present in the evidence (likely in tables/figures not provided). |
| `Hsu_1998.pdf` | Hsu A et al., Pharmacokinetic interactions between tw…, Clinical pharmacology and t… (1998) | popPK | 8 | [10.1016/S0009-9236(98)90041-8](https://doi.org/10.1016/S0009-9236(98)90041-8) | [9585800](https://pubmed.ncbi.nlm.nih.gov/9585800) | Population (nonlinear mixed-effects) PK interaction model of saquinavir with ritonavir in humans; some parameter values (inhibition constant) given, but full CL/V estimates likely in tables not fully shown. |
| `Li_2016.pdf` | Li J et al., Reduced Oral Bioavailability and Altere…, Drug research (2016) | popPK | 8 | [10.1055/s-0042-110393](https://doi.org/10.1055/s-0042-110393) | [27409329](https://pubmed.ncbi.nlm.nih.gov/27409329) | Rat PK study of saquinavir with NCA parameters (AUC, CL/F) reported as percent changes, but absolute numeric values are not given in the evidence. |
| `Lunn_1998.pdf` | Lunn DJ et al., The pharmacokinetics of saquinavir: a M…, Journal of pharmacokinetics… (1998) | popPK | 8 | [10.1023/a:1023224824228](https://doi.org/10.1023/a:1023224824228) | [9773392](https://pubmed.ncbi.nlm.nih.gov/9773392) | Population PK (two-compartment, zero-order absorption) of saquinavir in healthy human volunteers, but no numeric parameter values are present in the evidence. |
| `von_2009.pdf` | von Hentig N et al., Cytochrome P450 3A inhibition by atazan…, Antimicrobial agents and ch… (2009) | popPK | 8 | [10.1128/AAC.00025-09](https://doi.org/10.1128/AAC.00025-09) | [19528289](https://pubmed.ncbi.nlm.nih.gov/19528289) | Population PK (NONMEM) of saquinavir in 136 HIV+ adults with CL as key parameter, but numeric CL values are not shown in the abstract/evidence provided. |
| `Autar_2004.pdf` | Autar RS et al., Pharmacokinetic study of saquinavir har…, The Journal of antimicrobia… (2004) | popPK | 6 | [10.1093/jac/dkh415](https://doi.org/10.1093/jac/dkh415) | [15329366](https://pubmed.ncbi.nlm.nih.gov/15329366) | Human PK study of saquinavir reporting AUC/Cmax/Cmin/half-life, but no actual numeric parameter values appear in the evidence (only percent changes). |
| `Boffito_2004.pdf` | Boffito M et al., Pharmacokinetics of once-daily saquinav…, Antiviral therapy (2004) | popPK | 6 | not captured | [15259905](https://pubmed.ncbi.nlm.nih.gov/15259905) | Human steady-state saquinavir PK study, but only Cmax/Ctrough values are given; CL/V/t½ and other disposition parameters are not present in the evidence. |
| `Cardiello_2003.pdf` | Cardiello PG et al., Pharmacokinetics of lower doses of saqu…, Antiviral therapy (2003) | popPK | 6 | not captured | [12924542](https://pubmed.ncbi.nlm.nih.gov/12924542) | Human PK study of saquinavir with AUC and Cmin values present, but no CL/V or half-life values reported. |

<sub>queue written 2026-10-07T17:11:20.592274+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abel_2008 | not_relevant | 0 | 0 | Effects are drug-drug interactions (CYP3A4 inducers/inhibitors) on maraviroc PK, not gene variant/genotype/phenotype effects on saquinavir PK/PD. |
| popPK | Amano_2007 | irrelevant | 0 | 0 | In vitro antiviral drug-design study of a different protease inhibitor; saquinavir only used as a selection agent, no PK parameters. |
| popPK | Annu_2021 | irrelevant | 0 | 0 | Saquinavir is only mentioned as a CYP3A substrate example; the PK study concerns dexamethasone and dasatinib in mice, with no saquinavir parameters. |
| PGx | Arayne_2005 | not_relevant | 2 | 3 | Grapefruit juice (an environmental CYP3A4 inhibitor), not a gene variant, alters saquinavir exposure; no genotype effect or quantitative PK data given. |
| popPK | Autar_2004 | relevant | 6 | 3 | Human PK study of saquinavir reporting AUC/Cmax/Cmin/half-life, but no actual numeric parameter values appear in the evidence (only percent changes). |
| popPK | Autar_2005 | relevant | 4 | 2 | Human saquinavir PK study with NCA parameters (AUC, Cmax, Cmin) but no CL/V or population-PK model, and no numeric parameter values appear in the evidence. |
| PGx | Bailey_1998 | not_relevant | 2 | 3 | Saquinavir only mentioned as likely grapefruit juice interaction; no gene variant effect on its PK/PD parameters reported. |
| PGx | Berbel_2000 | not_relevant | 0 | 0 | Reports a drug-drug interaction (ritonavir inhibiting CYP3A4 affecting carbamazepine), not a pharmacogenomic variant effect on saquinavir PK/PD. |
| popPK | Beuschlein_2024 | irrelevant | 0 | 0 | This is a clinical guideline on glucocorticoid-induced adrenal insufficiency with no saquinavir PK parameters; no quantitative disposition values for saquinavir appear. |
| popPK | Boffito_2004 | relevant | 6 | 4 | Human steady-state saquinavir PK study, but only Cmax/Ctrough values are given; CL/V/t½ and other disposition parameters are not present in the evidence. |
| popPK | Caon_2017 | relevant | 8 | 3 | Compartmental PK of saquinavir in Beagle dogs is reported, but the numeric parameter values are not present in the evidence (likely in tables/figures not provided). |
| popPK | Chan_2011 | irrelevant | 0 | 0 | The paper models maraviroc PKPD-viral dynamics, not saquinavir; saquinavir is not mentioned at all. |
| popPK | Chegireddy_2020 | irrelevant | 2 | 1 | In-vitro dissolution/transfer model study with no in vivo PK disposition parameters (CL, V, half-life) for saquinavir reported in the evidence. |
| PGx | Chiou_2014 | not_relevant | 2 | 3 | Paper reports in vitro OATP1B1/1B3 inhibition by saquinavir for hyperbilirubinemia prediction, not a gene variant/genotype effect on saquinavir PK/PD parameters. |
| popPK | Comets_2007 | irrelevant | 0 | 0 | This is a population-PK study of digoxin, not saquinavir; no saquinavir parameters are reported. |
| popPK | Courlet_2019 | irrelevant | 0 | 0 | This is a population PK study of escitalopram, not saquinavir; saquinavir is not the subject drug. |
| popPK | Cvetkovic_2003 | irrelevant | 1 | 1 | This is a review of lopinavir/ritonavir; saquinavir appears only as a co-administered comparator with no quantitative PK parameters for saquinavir reported. |
| PGx | Cvetkovic_2003 | not_relevant | 0 | 0 | Review of lopinavir/ritonavir; no gene variant/genotype effect on saquinavir PK/PD reported. |
| popPK | Dailly_2005 | irrelevant | 1 | 0 | Saquinavir is only a co-administered drug; the population-PK parameters reported (CL, V, ka) are for lopinavir, not saquinavir. |
| popPK | Dandache_2007 | irrelevant | 0 | 0 | In vitro antiviral study; saquinavir only a comparator, no PK parameters. |
| popPK | De_2005 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study of TMC114 (darunavir); saquinavir is only mentioned as a comparator and no PK parameters are reported. |
| popPK | Dickinson_2009 | irrelevant | 2 | 1 | This is a population PK study of atazanavir; saquinavir appears only as a co-administered drug/covariate, with no saquinavir PK parameters reported. |
| popPK | Dresser_2000 | irrelevant | 2 | 0 | This is a narrative review of CYP3A4 drug interactions; saquinavir is only mentioned as an example and no numeric PK parameters are present. |
| PGx | Dresser_2000 | not_relevant | 2 | 3 | Discusses ritonavir boosting saquinavir bioavailability as a drug interaction, not a gene variant effect on PK/PD. |
| popPK | Dunn_2007 | irrelevant | 0 | 0 | In-vitro antiparasitic efficacy study with no PK parameters for saquinavir, which was merely tested and found ineffective. |
| popPK | Eke_2021 | irrelevant | 0 | 0 | The study models tenofovir, not saquinavir; saquinavir is not mentioned at all. |
| popPK | Eugene_2021 | irrelevant | 0 | 0 | This is a pharmacovigilance study of antipsychotic sedation from FAERS; saquinavir appears only as a CYP3A4 inhibitor mention, with no PK parameters for it. |
| PGx | Fichtenbaum_2002 | not_relevant | 0 | 0 | Paper discusses drug-drug interactions (CYP inhibition/induction) affecting saquinavir-related statin exposures, not gene variant/genotype effects on PK/PD parameters. |
| PGx | Fitzsimmons_1997 | not_relevant | 2 | 5 | In vitro CYP3A4 metabolism/inhibition study with no gene variant, genotype, or phenotype effect on saquinavir PK/PD parameters reported. |
| popPK | Flores-Pérez_2022 | irrelevant | 0 | 0 | This is a review of midazolam pharmacokinetics; saquinavir is not the subject drug and no saquinavir parameters appear. |
| popPK | Fong_2025 | irrelevant | 0 | 0 | In silico docking study of Cav3.1 channel inhibitors; saquinavir is only a docking candidate, no PK parameters reported. |
| popPK | Ford_2004 | irrelevant | 0 | 0 | The study is about nelfinavir and its metabolite M8; saquinavir is only mentioned as a comparator in prior literature, with no saquinavir PK parameters reported. |
| popPK | Frappier_1998 | irrelevant | 1 | 1 | This is an analytical assay validation paper with no PK parameter values for saquinavir; population PK studies are only mentioned as future work. |
| PGx | Fuhr_1998 | not_relevant | 0 | 0 | Grapefruit juice (CYP3A4 inhibition) interaction, not a gene variant/genotype effect on saquinavir PK/PD. |
| popPK | Fumagalli_2000 | irrelevant | 0 | 0 | Saquinavir is only a co-administered antiretroviral; the PK parameters reported are for daunorubicin, not saquinavir. |
| popPK | Férir_2013 | irrelevant | 0 | 0 | In-vitro antiviral study of LabyA1; saquinavir appears only as a co-administered comparator in synergy testing, with no PK parameters. |
| popPK | Gaucher_2004 | irrelevant | 2 | 2 | In-vitro prodrug chemistry study; only chemical hydrolysis half-lives in buffer, no PK disposition parameters for saquinavir. |
| popPK | Ghosh_2002 | irrelevant | 0 | 0 | In-vitro antiviral potency study; saquinavir is only a comparator, no PK parameters reported. |
| popPK | Gieschke_1999 | irrelevant | 4 | 5 | This is an exposure-response (PK/PD) modelling study reporting AUC and Cmin values but no disposition parameters (CL, V, Q, ka) or population-PK model for saquinavir. |
| PGx | Gill_2001 | not_relevant | 0 | 0 | Safety review of saquinavir SGC formulation; no gene variant/genotype effects on PK/PD parameters reported. |
| popPK | Gong_2000 | irrelevant | 0 | 0 | In vitro resistance study of BMS-232632; saquinavir only appears as a comparator with no PK parameters. |
| popPK | Hennig_2016 | irrelevant | 1 | 2 | The subject drug is rifabutin (and its metabolite), not saquinavir; saquinavir appears only as a co-administered PI affecting rifabutin's PK, and no saquinavir parameter values are given. |
| PGx | Hsu_1998_2 | not_relevant | 0 | 0 | Interactions are drug-drug (ritonavir-saquinavir CYP3A inhibition), not gene variant/genotype effects on PK/PD. |
| popPK | Hu_2018 | irrelevant | 0 | 0 | This is a machine-learning study of digoxin dosing; saquinavir is not mentioned and no PK parameters for it appear. |
| PGx | Hunt_2011 | not_relevant | 2 | 2 | Review of PI-associated QT prolongation with no pharmacogenomic (gene variant/genotype) effects on saquinavir PK/PD parameters reported. |
| popPK | King_2004 | irrelevant | 2 | 1 | This is a review of ritonavir-enhanced PI therapy; saquinavir AUC changes are cited secondhand with no original PK model or parameter values. |
| PGx | Klotz_2002 | not_relevant | 0 | 0 | Saquinavir only mentioned as a CYP3A4 inhibitor; no gene variant/genotype effect on any PK/PD parameter reported. |
| PGx | Koh_2003 | not_relevant | 0 | 0 | In vitro drug design/resistance study of TMC114; no gene variant effect on saquinavir PK/PD parameters reported. |
| popPK | Koh_2009 | irrelevant | 0 | 0 | In-vitro antiviral drug development study; saquinavir appears only as a selection/comparator agent with no PK parameters. |
| popPK | Koh_2010 | irrelevant | 0 | 0 | In vitro HIV resistance study; saquinavir only appears as a comparator drug with no PK parameters. |
| popPK | Kucera_2004 | irrelevant | 0 | 0 | In-vitro antiviral activity study of an AZT conjugate; saquinavir only mentioned as a resistance probe, no PK parameters. |
| PGx | Langtry_1999 | not_relevant | 0 | 0 | Paper is a sildenafil review; saquinavir mentioned only as a CYP3A4 inhibitor affecting sildenafil dosing, with no pharmacogenomic effect on saquinavir PK/PD. |
| popPK | Li_2016 | relevant | 8 | 4 | Rat PK study of saquinavir with NCA parameters (AUC, CL/F) reported as percent changes, but absolute numeric values are not given in the evidence. |
| PGx | Liedtke_2009 | not_relevant | 2 | 3 | Reports drug-drug interaction (saquinavir-warfarin) on INR, not a pharmacogenomic (gene variant) effect on saquinavir PK/PD. |
| popPK | Lledó-García_2011 | relevant | 10 | 3 | Population PK (NONMEM) model of saquinavir in rats, but numeric parameter values are not shown in the evidence provided (likely in tables/figures not included). |
| PGx | Lohitnavy_2015 | not_relevant | 0 | 0 | Paper describes a drug-drug interaction (saquinavir-itraconazole) model, not a pharmacogenomic effect of a gene variant on PK/PD parameters. |
| popPK | Lueangaramkul_2026 | irrelevant | 2 | 1 | In vitro antiviral/drug-repurposing study; the only PK content is a theoretical allometric dose calculation with assumptions relegated to Supporting Information, no measured saquinavir disposition parameters. |
| popPK | Lunn_1998 | relevant | 8 | 2 | Population PK (two-compartment, zero-order absorption) of saquinavir in healthy human volunteers, but no numeric parameter values are present in the evidence. |
| popPK | López_2011 | irrelevant | 0 | 0 | This is a population PK study of lopinavir/ritonavir; saquinavir appears only as a covariate affecting ritonavir clearance, with no saquinavir PK parameters reported. |
| popPK | Ma_2008 | irrelevant | 2 | 1 | The PK model and quantitative parameters (CL, Vss, Q, Vp) are for efavirenz; saquinavir is only a co-administered PI with no saquinavir disposition parameters reported. |
| PGx | Ma_2008 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects reported; only drug-drug interactions on efavirenz PK. |
| PGx | Ma_2008_2 | not_relevant | 4 | 6 | Effect is rifampicin-induced CYP3A4/PXR expression in transgenic mice, not a human gene variant/genotype altering saquinavir PK/PD; saquinavir data limited to microsomal metabolic stability. |
| PGx | Malaty_1999 | not_relevant | 0 | 0 | Review of drug–drug interactions via CYP3A4 inhibition/induction; no gene variant/genotype effects on saquinavir PK/PD reported. |
| popPK | Marsot_2017 | irrelevant | 0 | 0 | This is a population PK study of rifampicin, not saquinavir; saquinavir is not mentioned. |
| PGx | McKeage_2009 | not_relevant | 1 | 3 | Review of darunavir mentions viral genotype/resistance mutations affecting efficacy, but no host pharmacogenomic effect on saquinavir PK/PD parameters. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | Review of drug-drug interactions with cisapride; no gene variant/genotype effects on saquinavir PK/PD reported. |
| popPK | Molla_1998 | irrelevant | 0 | 0 | In-vitro serum attenuation assay of antiviral potency; saquinavir is only a comparator, no PK parameters reported. |
| PGx | Muirhead_2000 | not_relevant | 0 | 0 | Drug-drug interaction study (sildenafil with saquinavir/ritonavir); no gene variant/genotype effects reported. |
| PGx | Niemi_2003 | not_relevant | 0 | 0 | Rifampicin drug interaction effect on saquinavir PK is described, but no gene variant/genotype/phenotype effect is reported. |
| popPK | Okella_2022 | irrelevant | 0 | 0 | This is an in silico ADMET/docking study of antimicrobial peptides from African catfish, not a PK study of saquinavir; no saquinavir data present. |
| PGx | Pal_2006 | not_relevant | 0 | 0 | Discusses St. John's wort (herbal) interactions with saquinavir via P-gp/CYP3A4, not a gene variant/genotype effect on PK/PD parameters. |
| PGx | Parikh_2007 | not_relevant | 2 | 3 | Saquinavir appears only as a CYP2C8 inhibitor affecting amodiaquine metabolism; no gene variant effect on saquinavir PK/PD is reported. |
| PGx | Patel_2005 | not_relevant | 0 | 0 | Paper discusses enfuvirtide PK/PD and saquinavir coadministration effects on enfuvirtide, with no pharmacogenomic/genotype effects on saquinavir PK/PD. |
| popPK | Peatey_2010 | irrelevant | 0 | 0 | In-vitro antimalarial efficacy study of HIV protease inhibitors; no PK parameters for saquinavir are reported. |
| PGx | Penzak_2002 | not_relevant | 0 | 0 | Review of PI-associated hyperlipidemia management; no gene variant/genotype effects on saquinavir PK/PD reported. |
| popPK | Pfister_2002 | irrelevant | 2 | 2 | The population PK model and parameters (CL, V) are for amprenavir; saquinavir is only a co-administered comparator with no saquinavir PK values reported. |
| PGx | Pfister_2002 | not_relevant | 0 | 0 | Reports drug-drug interactions (protease inhibitors, efavirenz) on amprenavir PK, not any gene variant/genotype/phenotype effect. |
| popPK | Pfister_2003 | irrelevant | 2 | 1 | Saquinavir is only a co-administered comparator; no SQV PK parameter values are reported, and SQV PK modeling details/values are not in the evidence. |
| popPK | Pozniak_2008 | irrelevant | 0 | 0 | Saquinavir is only a comparator protease inhibitor in an efficacy trial; no PK parameters are reported. |
| popPK | Rafehi_2026 | irrelevant | 0 | 0 | In-vitro transporter inhibition study with no saquinavir PK parameters; saquinavir not even mentioned. |
| popPK | Raugi_2013 | irrelevant | 0 | 0 | In-vitro HIV-2 resistance study with EC50 susceptibility data, no pharmacokinetic parameters for saquinavir. |
| popPK | Raugi_2016 | irrelevant | 0 | 0 | In vitro virology study of HIV-2 protease inhibitor susceptibility (EC50), with no pharmacokinetic parameters for saquinavir. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | This is a PK/PD tutorial on slow reversible binding for various drugs (candesartan, etc.); saquinavir is not the subject drug and no saquinavir PK parameters appear. |
| popPK | Riveros_2025 | irrelevant | 0 | 0 | This is an HIV-1 protease inhibitor resistance prediction ML study; saquinavir is only one of several drugs in resistance classification, with no PK parameters (CL, V, ka, half-life) reported. |
| popPK | Robinson_2000 | irrelevant | 0 | 0 | In-vitro antiviral activity study of BMS-232632; saquinavir only appears as a combination comparator with no PK parameters. |
| popPK | Rosenkranz_2007 | irrelevant | 3 | 2 | PK-PD study of metabolic effects where saquinavir is only a co-administered drug; no disposition parameters (CL, V, half-life) for saquinavir are reported in the evidence. |
| PGx | Sahai_1996 | not_relevant | 0 | 0 | Review of drug-drug interactions only; no gene variant/genotype effects on saquinavir PK/PD reported. |
| PGx | Schmitt_2009 | not_relevant | 0 | 0 | Drug-drug interaction (saquinavir-ritonavir on midazolam PK) with no gene variant/genotype/phenotype reported. |
| popPK | Shelton_2004 | irrelevant | 2 | 1 | Saquinavir is the perpetrator drug; PK parameters reported are for methadone, and saquinavir values (only troughs vs EC50) are not given numerically. |
| popPK | Shivarov_2026 | irrelevant | 0 | 0 | FAERS pharmacovigilance study of ibrutinib co-exposures; no saquinavir PK parameters reported. |
| PGx | Takeuchi_2006 | not_relevant | 3 | 3 | In vitro P-gp efflux of saquinavir across species MDR1 orthologs, not a gene variant/genotype effect on PK/PD in vivo. |
| popPK | Taylor_2000 | irrelevant | 0 | 0 | In-vitro antiviral drug-resistance study of dOTC; saquinavir appears only as a comparator, with no PK parameters. |
| popPK | Tebbens_2018 | irrelevant | 0 | 0 | This is a review of PXR/CYP3A gene regulation models; saquinavir is not the subject drug and no PK parameter values for it appear. |
| popPK | Tojo_2010 | irrelevant | 0 | 0 | In-vitro antiviral drug-design study with no PK parameters for saquinavir; saquinavir only used as a selection agent. |
| popPK | Torabfam_2025 | irrelevant | 0 | 0 | This is an in-vitro/in-silico quercetin-derivative antiviral study; saquinavir is only mentioned as a literature comparator with no PK parameters. |
| popPK | Trout_2004 | relevant | 9 | 4 | Population PK of saquinavir in HIV patients with CL/F, V/F, ka estimated, but the numeric parameter values (beyond AUCs) are not present in the provided evidence. |
| PGx | Trout_2004 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on saquinavir PK/PD are reported; only disease state (diarrhea/wasting) affects exposure. |
| popPK | Vanhove_1997 | irrelevant | 4 | 2 | Population-PK methods were used to estimate saquinavir AUC exposure, but no numeric disposition parameters (CL, V, ka, etc.) appear in the evidence; values likely in other publications/supplements. |
| PGx | Vourvahis_2013 | not_relevant | 0 | 0 | Study examines renal impairment effects on maraviroc PK with saquinavir/ritonavir as an inhibitor; no gene variant/genotype/phenotype effects reported. |
| PGx | Wacher_1998 | not_relevant | 3 | 2 | General discussion of CYP3A/P-gp limiting saquinavir oral absorption; no gene variant/genotype effect on a PK parameter reported. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | In vitro binding/antiviral study with no PK disposition parameters for saquinavir. |
| popPK | Wei_2024 | irrelevant | 0 | 0 | This is a rivaroxaban trial protocol; saquinavir is not mentioned and no PK parameter values are present. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | In vitro BCRP inhibition by saquinavir; no gene variant/genotype effect on PK/PD parameters in patients. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility (EC50) study, not a pharmacokinetic study with disposition parameters for saquinavir. |
| popPK | Xu_2001 | irrelevant | 0 | 0 | This is an in-vitro SAR study of ADAM reverse transcriptase inhibitors; saquinavir is only mentioned as a comparator in a resistant-virus panel, with no PK parameters. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | Review of PBPK/QSP/AI modeling across lifespan; saquinavir is not the subject drug and no saquinavir PK parameters appear. |
| PGx | de_2016 | not_relevant | 0 | 0 | Paper reports PBPK-predicted DDI effects of saquinavir on macitentan, not a pharmacogenomic variant effect on saquinavir PK/PD. |
| popPK | de_2024 | irrelevant | 2 | 1 | Saquinavir is only one of 18 drugs in a PBK cholestasis panel and was excluded from simulations; no saquinavir-specific PK parameter values appear in the evidence (data live in supplementary tables/Github files not provided). |
| popPK | von_2009 | relevant | 8 | 3 | Population PK (NONMEM) of saquinavir in 136 HIV+ adults with CL as key parameter, but numeric CL values are not shown in the abstract/evidence provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:11 UTC</sub>
