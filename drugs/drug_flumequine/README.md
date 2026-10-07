<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;flumequine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flumequine_Mevius1990_reference&quot;,&quot;label&quot;:&quot;Mevius_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flumequine/Flumequine_Mevius1990_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# flumequine

- **generic name:** flumequine
- **ATC codes:** `J01MB07`
- **DrugBank:** [DB08972](https://go.drugbank.com/drugs/DB08972) · **PubChem:** [CID 3374](https://pubchem.ncbi.nlm.nih.gov/compound/3374)
- **molar mass:** 261.2484 g/mol (C14H12FNO3) — DrugBank
- **groups:** approved, withdrawn

## About

Flumequine is a quinolone antibacterial that was used to treat bacterial infections, particularly urinary tract infections. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3074500](https://www.wikidata.org/wiki/Q3074500) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| flumequine | parent | 261.248 | C14H12FNO3 | DrugBank | [3374](https://pubchem.ncbi.nlm.nih.gov/compound/3374) | Anadón_2008, Mevius_1990, Ziv_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:00 | 5:18 | 1/2/1 | 4/0/0 | 0/0/0 | 160,806/9,886 | einfracz / qwen3.8-27b | 4 | 1/2 | 3/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Mevius_1990_reference](drugs/drug_flumequine/Flumequine_Mevius1990_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Mevius DJ et al., Pharmacokinetics, metabolism and renal…, Journal of veterinary pharm… (1990) | [10.1111/j.1365-2885.1990.tb00764.x](https://doi.org/10.1111/j.1365-2885.1990.tb00764.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Ziv_1986_reference](drugs/drug_flumequine/Flumequine_Ziv1986_reference.md) | — | 1-compartment (no model) | 7 | Ziv G et al., Clinical pharmacokinetics of flumequine…, Journal of veterinary pharm… (1986) | [10.1111/j.1365-2885.1986.tb00027.x](https://doi.org/10.1111/j.1365-2885.1986.tb00027.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Anadón_2008_reference](drugs/drug_flumequine/Flumequine_Anadn2008_reference.md) | — | 1-compartment (no model) | 3 | Anadón A et al., Oral bioavailability, tissue distributi…, Food and chemical toxicolog… (2008) | [10.1016/j.fct.2007.09.086](https://doi.org/10.1016/j.fct.2007.09.086) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Delmas_1997_reference](drugs/drug_flumequine/Flumequine_Delmas1997_reference.md) | — | 1-compartment (no model) | 0 | Delmas JM et al., Pharmacokinetics of flumequine in sheep…, Journal of veterinary pharm… (1997) | [10.1046/j.1365-2885.1997.00067.x](https://doi.org/10.1046/j.1365-2885.1997.00067.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Koutsoviti-Papadopoulou_1995_GABA_induced_contractions](drugs/drug_flumequine/pd_Koutsoviti_Papadopoulou_1995_GABA_induced_contractions.md) | GABA-induced contractions ← flumequine · inhibition effect | — | Koutsoviti-Papadopoulou M et al., Inhibitory effect of flumequine, enoxac…, General pharmacology (1995) | [10.1016/0306-3623(95)00001-h](https://doi.org/10.1016/0306-3623(95)00001-h) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Lalumera_2004_bioluminescence](drugs/drug_flumequine/pd_Lalumera_2004_bioluminescence.md) | bioluminescence ← flumequine · inhibition effect | — | Lalumera GM et al., Preliminary investigation on the enviro…, Chemosphere (2004) | [10.1016/j.chemosphere.2003.08.001](https://doi.org/10.1016/j.chemosphere.2003.08.001) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Lützhøft_1999_growth_rates](drugs/drug_flumequine/pd_L_tzh_ft_1999_growth_rates.md) | growth rates ← flumequine · direct sigmoid Emax (Hill) effect | — | Lützhøft HH et al., Algal toxicity of antibacterial agents…, Archives of environmental c… (1999) | [10.1007/s002449900435](https://doi.org/10.1007/s002449900435) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [van_2010_DOD](drugs/drug_flumequine/pd_van_2010_DOD.md) | inhibition of growth (DOD) biomarker turnover ← flumequine | — | van der Grinten E et al., Comparing the sensitivity of algal, cya…, Chemosphere (2010) | [10.1016/j.chemosphere.2010.04.011](https://doi.org/10.1016/j.chemosphere.2010.04.011) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=flumequine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 38 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anadón_2008.pdf` | Anadón A et al., Oral bioavailability, tissue distributi…, Food and chemical toxicolog… (2008) | popPK | 10 | [10.1016/j.fct.2007.09.086](https://doi.org/10.1016/j.fct.2007.09.086) | [17950971](https://pubmed.ncbi.nlm.nih.gov/17950971) | The study is a PK study of flumequine in chickens reporting half-life, MRT, Cmax, Tmax, and bioavailability, but does not explicitly state clearance or volume of distribution values in the provided evidence. |
| `Delmas_1997.pdf` | Delmas JM et al., Pharmacokinetics of flumequine in sheep…, Journal of veterinary pharm… (1997) | popPK | 10 | [10.1046/j.1365-2885.1997.00067.x](https://doi.org/10.1046/j.1365-2885.1997.00067.x) | [9280363](https://pubmed.ncbi.nlm.nih.gov/9280363) | The study reports quantitative PK parameters for flumequine in sheep, including Vdss, half-life, Cmax, Tmax, and bioavailability, all of which are explicitly provided in the abstract text. |
| `Mevius_1990.pdf` | Mevius DJ et al., Pharmacokinetics, metabolism and renal…, Journal of veterinary pharm… (1990) | popPK | 10 | [10.1111/j.1365-2885.1990.tb00764.x](https://doi.org/10.1111/j.1365-2885.1990.tb00764.x) | [2384907](https://pubmed.ncbi.nlm.nih.gov/2384907) | The study reports quantitative two-compartment pharmacokinetic parameters (Vd, Cl, t1/2) for flumequine in calves, with all numeric values explicitly stated in the abstract/evidence. |
| `Mevius_1991.pdf` | Mevius DJ et al., Effects of experimentally induced Paste…, Journal of veterinary pharm… (1991) | popPK | 10 | [10.1111/j.1365-2885.1991.tb00820.x](https://doi.org/10.1111/j.1365-2885.1991.tb00820.x) | [1920605](https://pubmed.ncbi.nlm.nih.gov/1920605) | The text explicitly provides numeric values for clearance, volume of distribution, AUC, and bioavailability for flumequine in dairy calves. |
| `Xu_2016.pdf` | Xu N et al., Pharmacokinetics and bioavailability of…, Journal of veterinary pharm… (2016) | popPK | 10 | [10.1111/jvp.12261](https://doi.org/10.1111/jvp.12261) | [26411430](https://pubmed.ncbi.nlm.nih.gov/26411430) | Reports pharmacokinetic parameters (half-lives, AUC, bioavailability) for flumequine in fish, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text. |
| `Ziv_1986.pdf` | Ziv G et al., Clinical pharmacokinetics of flumequine…, Journal of veterinary pharm… (1986) | popPK | 10 | [10.1111/j.1365-2885.1986.tb00027.x](https://doi.org/10.1111/j.1365-2885.1986.tb00027.x) | [3522937](https://pubmed.ncbi.nlm.nih.gov/3522937) | The study reports quantitative PK parameters (half-lives, volumes of distribution) for flumequine in calves with values clearly stated in the text. |
| `Ferraresi_2013.pdf` | Ferraresi C et al., Pharmacokinetic/pharmacodynamic evaluat…, Poultry science (2013) | pd | 5 | [10.3382/ps.2013-03460](https://doi.org/10.3382/ps.2013-03460) | [24235225](https://www.ncbi.nlm.nih.gov/pubmed/24235225) | metadata signals extractable PD data (PK/PD) |
| `Tolosi_2021.pdf` | Tolosi R et al., Delayed toxicity of three fluoroquinolo…, Ecotoxicology and environme… (2021) | pd | 5 | [10.1016/j.ecoenv.2021.112778](https://doi.org/10.1016/j.ecoenv.2021.112778) | [34537589](https://www.ncbi.nlm.nih.gov/pubmed/34537589) | metadata signals extractable PD data (EC50) |
| `Ayub_2017.pdf` | Ayub MA et al., Variation in Phenolic Profile, β-Carote…, Chemistry & biodiversity (2017) | pd | 4 | [10.1002/cbdv.201600463](https://doi.org/10.1002/cbdv.201600463) | [28299905](https://www.ncbi.nlm.nih.gov/pubmed/28299905) | metadata signals extractable PD data (IC50) |
| `Lalumera_2004.pdf` | Lalumera GM et al., Preliminary investigation on the enviro…, Chemosphere (2004) | pd | 4 | [10.1016/j.chemosphere.2003.08.001](https://doi.org/10.1016/j.chemosphere.2003.08.001) | [14599512](https://www.ncbi.nlm.nih.gov/pubmed/14599512) | metadata signals extractable PD data (EC50) |
| `Lützhøft_1999.pdf` | Lützhøft HH et al., Algal toxicity of antibacterial agents…, Archives of environmental c… (1999) | pd | 4 | [10.1007/s002449900435](https://doi.org/10.1007/s002449900435) | [9828255](https://www.ncbi.nlm.nih.gov/pubmed/9828255) | metadata signals extractable PD data (EC50) |
| `Robinson_2005.pdf` | Robinson AA et al., Toxicity of fluoroquinolone antibiotics…, Environmental toxicology an… (2005) | pd | 4 | [10.1897/04-210r.1](https://doi.org/10.1897/04-210r.1) | [15720004](https://www.ncbi.nlm.nih.gov/pubmed/15720004) | metadata signals extractable PD data (EC50) |
| `Van_2004.pdf` | Van Coillie E et al., Development of an indirect competitive…, Journal of agricultural and… (2004) | pd | 4 | [10.1021/jf049593d](https://doi.org/10.1021/jf049593d) | [15291461](https://www.ncbi.nlm.nih.gov/pubmed/15291461) | metadata signals extractable PD data (IC50) |
| `Zounková_2011.pdf` | Zounková R et al., Complex evaluation of ecotoxicity and g…, Environmental toxicology an… (2011) | pd | 4 | [10.1002/etc.486](https://doi.org/10.1002/etc.486) | [21312248](https://www.ncbi.nlm.nih.gov/pubmed/21312248) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T11:57:45.619935+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carballeira_2012 | irrelevant | 0 | 0 | The study reports toxicity endpoints (EC50) in sea urchins, not pharmacokinetic parameters for flumequine. |
| popPK | EFSA_2021 | irrelevant | 0 | 0 | The paper is a regulatory opinion on cross-contamination levels in feed and does not contain original pharmacokinetic parameter data for flumequine. |
| popPK | Ferraresi_2013 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| popPK | Giraud_2004 | irrelevant | 0 | 0 | The study investigates antibiotic resistance mechanisms in bacteria (Aeromonas salmonicida) using MIC values, which are pharmacodynamic/antimicrobial susceptibility data, not pharmacokinetic disposition parameters for flumequine in a host. |
| popPK | Hernando_2007 | irrelevant | 0 | 0 | The study evaluates the toxicity of flumequine using the Vibrio fischeri bioassay, which is an ecotoxicology/in-vitro mechanistic study, not a pharmacokinetic study. |
| popPK | Koutsoviti-Papadopoulou_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of muscle contraction inhibition, not a pharmacokinetic study. |
| PGx | Kuroda_2013 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (metabolic induction) rather than genetic variants affecting pharmacokinetics or pharmacodynamics. |
| popPK | Lalumera_2004 | irrelevant | 0 | 0 | This is an environmental monitoring and toxicity study reporting sediment concentrations and EC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Lützhøft_1999 | irrelevant | 0 | 0 | The study investigates the toxic effects of flumequine on algae (EC50 values), not its pharmacokinetic parameters. |
| popPK | Robinson_2005 | irrelevant | 0 | 0 | The study is an ecotoxicity assessment measuring toxicity endpoints (EC50, NOEC) in aquatic organisms, not a pharmacokinetic study. |
| popPK | Swinkels_2024 | irrelevant | 0 | 0 | The study investigates the selection of antimicrobial resistance mechanisms in E. coli and broilers, not the pharmacokinetic disposition parameters of flumequine. |
| popPK | Tolosi_2021 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| popPK | Zounková_2011 | irrelevant | 0 | 0 | The paper reports ecotoxicity and genotoxicity endpoints (EC50, LOEC) for flumequine in model organisms, not pharmacokinetic parameters. |
| popPK | van_2010 | irrelevant | 0 | 0 | The paper is an ecotoxicology study comparing the sensitivity of bioassays to various antibiotics, reporting EC50 values for toxicity rather than pharmacokinetic parameters for flumequine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:58 UTC</sub>
