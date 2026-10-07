<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;didanosine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Didanosine_Greenberg2022_reference&quot;,&quot;label&quot;:&quot;Greenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Greenberg2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Ngara2020_reference&quot;,&quot;label&quot;:&quot;Ngara_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Ngara2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Zhou1999_reference&quot;,&quot;label&quot;:&quot;Zhou_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Zhou1999_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# didanosine

- **generic name:** didanosine
- **ATC codes:** `J05AF02`
- **DrugBank:** [DB00900](https://go.drugbank.com/drugs/DB00900) · **PubChem:** [CID 50599](https://pubchem.ncbi.nlm.nih.gov/compound/50599)
- **molar mass:** 236.2273 g/mol (C10H12N4O3) — DrugBank
- **groups:** approved, investigational

## About

Didanosine is an antiviral nucleoside analogue used to treat HIV infection and AIDS. It is an approved medicine and has been included on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422606](https://www.wikidata.org/wiki/Q422606) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| didanosine | parent | 236.227 | C10H12N4O3 | DrugBank | [50599](https://pubchem.ncbi.nlm.nih.gov/compound/50599) | Drusano_1992, Pai_1992, Piscitelli_1996, Singhal_1996, Velasque_2005, Velasque_2007, Zhou_1999 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:24 | 16:27 | 3/3/4 | 1/0/0 | 0/0/0 | 724,329/52,405 | ollama / glm-5.3-flash | 23 | 4/16 | 22/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Greenberg_2022_reference](drugs/drug_didanosine/Didanosine_Greenberg2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Greenberg RG et al., Population Pharmacokinetics of Moxiflox…, Paediatric drugs (2022) | [10.1007/s40272-022-00493-3](https://doi.org/10.1007/s40272-022-00493-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Ngara_2020_reference](drugs/drug_didanosine/Didanosine_Ngara2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Ngara B et al., A population pharmacokinetic model is b…, BMC pharmacology & toxicolo… (2020) | [10.1186/s40360-020-00437-y](https://doi.org/10.1186/s40360-020-00437-y) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Zhou_1999_reference](drugs/drug_didanosine/Didanosine_Zhou1999_reference.md) | ▶ model + simulator | 1-compartment, oral | 7 | Zhou XJ et al., Population pharmacokinetics of nevirapi…, Antimicrobial agents and ch… (1999) | [10.1128/AAC.43.1.121](https://doi.org/10.1128/AAC.43.1.121) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Drusano_1992_reference](drugs/drug_didanosine/Didanosine_Drusano1992_reference.md) | — | 1-compartment (no model) | 7 | Drusano GL et al., Impact of bioavailability on determinat…, Antimicrobial agents and ch… (1992) | [10.1128/AAC.36.6.1280](https://doi.org/10.1128/AAC.36.6.1280) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Pai_1992_reference](drugs/drug_didanosine/Didanosine_Pai1992_reference.md) | — | 1-compartment (no model) | 6 | Pai SM et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (1992) | [10.1002/j.1552-4604.1992.tb03832.x](https://doi.org/10.1002/j.1552-4604.1992.tb03832.x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Piscitelli_1996_reference](drugs/drug_didanosine/Didanosine_Piscitelli1996_reference.md) | — | 1-compartment (no model) | 3 | Piscitelli SC et al., Effects of cytokines on antiviral pharm…, Antimicrobial agents and ch… (1996) | [10.1128/AAC.40.1.161](https://doi.org/10.1128/AAC.40.1.161) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Singhal_1996_reference](drugs/drug_didanosine/Didanosine_Singhal1996_reference.md) | — | parent + metabolite (no model) | 4 | Singhal D et al., Role of altered metabolism in dideoxynu…, Drug metabolism and disposi… (1996) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Velasque_2005_reference](drugs/drug_didanosine/Didanosine_Velasque2005_reference.md) | — | 1-compartment (no model) | 5 | Velasque LS et al., Estimating the genetic component (RGC)…, AIDS (London, England) 19 S… (2005) | [10.1097/01.aids.0000191495.89606.2e](https://doi.org/10.1097/01.aids.0000191495.89606.2e) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Velasque_2007_final](drugs/drug_didanosine/Didanosine_Velasque2007_final.md) | — | 1-compartment (no model) | 9 | Velasque LS et al., A new model for the population pharmaco…, Brazilian journal of medica… (2007) | [10.1590/s0100-879x2007000100013](https://doi.org/10.1590/s0100-879x2007000100013) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Velasque_2007_initial_model](drugs/drug_didanosine/Didanosine_Velasque2007_initial_model.md) | — | 1-compartment (no model) | 9 | Velasque LS et al., A new model for the population pharmaco…, Brazilian journal of medica… (2007) | [10.1590/s0100-879x2007000100013](https://doi.org/10.1590/s0100-879x2007000100013) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Frezza_2016_GFP_positive_cells](drugs/drug_didanosine/pd_Frezza_2016_GFP_positive_cells.md) | HIV-induced GFP expression in infected CEM-GFP cells ← didanosine · direct sigmoid Emax (Hill) effect | — | Frezza C et al., Testing anti-HIV activity of antiretrov…, Journal of medical virology (2016) | [10.1002/jmv.24418](https://doi.org/10.1002/jmv.24418) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=didanosine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown, `SLC29A1` unknown | DrugBank actor |
| distribution | liver | `SLC29A1` unknown | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PNP (substrate), SLC29A2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 233 matched, 147 returned
- **screened:** 9  ·  **relevant:** 9
- **records:** 10  ·  extracted 3  ·  needs_review 4  ·  rejected 3  ·  stale 9
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Drusano_1992.pdf` | Drusano GL et al., Impact of bioavailability on determinat…, Antimicrobial agents and ch… (1992) | popPK | 10 | [10.1128/AAC.36.6.1280](https://doi.org/10.1128/AAC.36.6.1280) | [1416828](https://pubmed.ncbi.nlm.nih.gov/1416828) | Population-PK (NONMEM) study of didanosine with CL, Vc, half-life, ka, and bioavailability values reported directly in the abstract. |
| `Pai_1992.pdf` | Pai SM et al., Population pharmacokinetic analysis of…, Journal of clinical pharmac… (1992) | popPK | 10 | [10.1002/j.1552-4604.1992.tb03832.x](https://doi.org/10.1002/j.1552-4604.1992.tb03832.x) | [1564128](https://pubmed.ncbi.nlm.nih.gov/1564128) | Population PK (NONMEM) analysis of didanosine with full numeric parameters (CL, Vc, Vdss, Ka, F) reported directly in the abstract. |
| `Velasque_2005.pdf` | Velasque LS et al., Estimating the genetic component (RGC)…, AIDS (London, England) 19 S… (2005) | popPK | 10 | [10.1097/01.aids.0000191495.89606.2e](https://doi.org/10.1097/01.aids.0000191495.89606.2e) | [16249659](https://pubmed.ncbi.nlm.nih.gov/16249659) | Population PK (NONMEM) model of didanosine with full numeric parameters (CL, V2, Q, V3, Ka) reported directly in the abstract. |
| `Zhou_1999.pdf` | Zhou XJ et al., Population pharmacokinetics of nevirapi…, Antimicrobial agents and ch… (1999) | popPK | 10 | [10.1128/AAC.43.1.121](https://doi.org/10.1128/AAC.43.1.121) | [9869576](https://pubmed.ncbi.nlm.nih.gov/9869576) | Population PK (NONMEM) of didanosine with numeric CL, VSS, V, and F values reported directly in the abstract. |
| `Adams_1998.pdf` | Adams JM et al., Relationship between didanosine exposur…, Antimicrobial agents and ch… (1998) | popPK | 8 | [10.1128/AAC.42.4.821](https://doi.org/10.1128/AAC.42.4.821) | [9559790](https://pubmed.ncbi.nlm.nih.gov/9559790) | Reports quantitative didanosine oral clearance (132 ± 27.7 L/h) from Bayesian NONMEM estimation in HIV patients; values are in the abstract itself. |
| `Hirt_2009.pdf` | Hirt D et al., Didanosine population pharmacokinetics…, Antimicrobial agents and ch… (2009) | popPK | 8 | [10.1128/AAC.01187-08](https://doi.org/10.1128/AAC.01187-08) | [19581461](https://pubmed.ncbi.nlm.nih.gov/19581461) | Population PK model (NONMEM, one-compartment) for didanosine in HIV-infected children, but numeric CL/V values are not shown in the abstract text. |
| `Piscitelli_1996.pdf` | Piscitelli SC et al., Effects of cytokines on antiviral pharm…, Antimicrobial agents and ch… (1996) | popPK | 8 | [10.1128/AAC.40.1.161](https://doi.org/10.1128/AAC.40.1.161) | [8787899](https://pubmed.ncbi.nlm.nih.gov/8787899) | Population PK (two-compartment, iterative two-stage) of didanosine in HIV patients with numeric Vc and ka values reported in the abstract. |
| `Tatsunami_1998.pdf` | Tatsunami S et al., Using Gaussian-like input rate function…, International journal of cl… (1998) | popPK | 8 | not captured | [9825269](https://pubmed.ncbi.nlm.nih.gov/9825269) | Population/compartmental PK model of didanosine in two patients, but numeric parameter values are not shown in the provided evidence. |
| `Galinsky_1991.pdf` | Galinsky RE et al., Probenecid enhances central nervous sys…, The Journal of pharmacology… (1991) | popPK | 7 | not captured | [1904495](https://pubmed.ncbi.nlm.nih.gov/1904495) | Rat PK study of didanosine with compartmental modeling, but numeric model parameters (CL, V, k) are not present in the abstract evidence. |
| `Bruzzese_1995.pdf` | Bruzzese VL et al., Effect of fluconazole on pharmacokineti…, Antimicrobial agents and ch… (1995) | popPK | 6 | [10.1128/aac.39.5.1050](https://doi.org/10.1128/aac.39.5.1050) | [7625787](https://pubmed.ncbi.nlm.nih.gov/7625787) | Human ddI PK study reporting AUC, Cmax, and half-life values, but no CL/V or compartmental model parameters. |
| `Nacro_2011.pdf` | Nacro B et al., Pharmacology and immuno-virologic effic…, Bulletin of the World Healt… (2011) | popPK | 5 | [10.2471/blt.10.081646](https://doi.org/10.2471/blt.10.081646) | [21673861](https://pubmed.ncbi.nlm.nih.gov/21673861) | A PK study of didanosine in HIV-infected children, but the abstract contains no numeric disposition parameters; values likely in the full text/tables not provided. |
| `Singhal_1996.pdf` | Singhal D et al., Role of altered metabolism in dideoxynu…, Drug metabolism and disposi… (1996) | popPK | 5 | not captured | [8894519](https://pubmed.ncbi.nlm.nih.gov/8894519) | Didanosine (ddI) is primarily a comparator to its fluoro analogue, but its clearance (90.9 ml/min/kg) is quantitatively reported in rats. |

<sub>queue written 2026-10-07T16:10:10.884466+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ait-Khaled_2002 | not_relevant | 3 | 2 | Reports viral genotype (M184V, TAMs) affecting didanosine susceptibility (PD) only as counts of isolates with reduced susceptibility, no fitted effect size or PK/PD parameter change. |
| popPK | Baheti_2011 | irrelevant | 0 | 0 | This is a population PK study of tenofovir, not didanosine; didanosine is not the subject drug. |
| popPK | Balzarini_1993 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study of HIV inhibitors; didanosine (DDI) is only a comparator with no PK parameters. |
| PGx | Barro_2011 | not_relevant | 0 | 0 | No pharmacogenomic analysis; only HIV drug-resistance mutations and clinical efficacy outcomes reported. |
| PGx | Barry_1997 | not_relevant | 0 | 0 | Review of protease inhibitor PK; no gene variant effects on didanosine PK/PD reported. |
| PGx | Begovac_2005 | not_relevant | 0 | 0 | No pharmacogenomic effect on didanosine PK/PD reported; only a general toxicity warning about combining zidovudine and didanosine. |
| popPK | Boelaert_1999 | irrelevant | 0 | 0 | In-vitro antiviral efficacy study with no PK parameters for didanosine. |
| popPK | Bouazza_2010 | irrelevant | 0 | 0 | The study models lamivudine, not didanosine, which is only a co-administered drug; no didanosine PK parameters are reported. |
| PGx | Boyd_2015 | not_relevant | 2 | 3 | Reports HIV genotypic resistance scores (viral mutations) predicting virological failure, not host gene variants affecting didanosine PK/PD parameters. |
| PGx | Bräu_2005 | not_relevant | 0 | 0 | Review of HIV/HCV coinfection therapy with no gene variant effects on didanosine PK/PD parameters reported. |
| PGx | Bräu_2005_2 | not_relevant | 0 | 0 | Review of HCV therapy mentions didanosine toxicity risk only, with no gene variant effect on PK/PD parameters. |
| popPK | Capparelli_2003 | irrelevant | 0 | 0 | This is a population PK study of zidovudine; didanosine is only a co-administered treatment arm with no didanosine PK parameters reported. |
| popPK | Capparelli_2022 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PGx | Carrat_2004 | not_relevant | 2 | 1 | Mentions pancreatitis/lactatemia with didanosine but no gene variant effect on didanosine PK/PD parameters. |
| PGx | Carson_1991 | not_relevant | 3 | 5 | In vitro mutant cell line study of nucleoside metabolism; no gene variant effect on didanosine PK/PD parameters in patients. |
| popPK | Castillo-Mancilla_2016 | irrelevant | 1 | 1 | Didanosine is only a co-administered drug; the PK model and numeric parameters (CL/F, C24) are for atazanavir, not didanosine. |
| PGx | Castillo-Mancilla_2016 | not_relevant | 2 | 5 | Pharmacogenetic findings (CYP3A5) concern atazanavir PK/metabolism, not didanosine; didanosine is only a co-administered drug with no genotype–PK/PD effect reported. |
| popPK | Coplan_1991 | irrelevant | 0 | 0 | In vitro cytotoxicity/selectivity study with no PK parameters for didanosine. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | This is a review of lopinavir/ritonavir; didanosine is only mentioned as a coadministered drug with no PK parameters for it. |
| PGx | Cvetkovic_2003 | not_relevant | 0 | 0 | Review of lopinavir/ritonavir; didanosine only mentioned for food-related timing, no gene variant effects on PK/PD. |
| PGx | Davey_1996 | not_relevant | 3 | 2 | Genetic data limited to viral RT genotype/phenotype (codon 215) affecting response, not host pharmacogenomics of didanosine PK/PD parameters. |
| popPK | De_1994 | irrelevant | 0 | 0 | This is an antiviral potency study of the bicyclam JM3100; didanosine (ddI) is only mentioned as a combination agent, with no PK parameters for it. |
| popPK | Dhanalakshmi_2021 | irrelevant | 0 | 0 | Computational furin-inhibitor screening study; didanosine appears only as a network node, with no PK parameters reported. |
| popPK | Dhanalakshmi_2022 | irrelevant | 0 | 0 | Computational drug-repurposing study on furin inhibitors; didanosine appears only as a network node, with no PK parameters reported. |
| PGx | Dhillon_2008 | not_relevant | 0 | 0 | Review of peginterferon/ribavirin in HIV-HCV coinfection; no pharmacogenomic effect on didanosine PK/PD parameters reported. |
| popPK | Dong_2012 | irrelevant | 0 | 0 | This is a nevirapine population-PK study; didanosine is not the subject drug and no didanosine parameters appear. |
| popPK | Duffull_2015 | irrelevant | 0 | 0 | A methodological review about repeated population analyses with no didanosine PK parameters or numeric values reported. |
| popPK | Dumond_2007 | irrelevant | 3 | 1 | Non-compartmental genital tract exposure study; didanosine is one of many drugs with only a % ratio reported, no CL/V/ka or model parameters in the evidence. |
| popPK | Díaz-Rodríguez_2009 | irrelevant | 0 | 0 | This is a medicinal chemistry synthesis/antiviral screening paper with no PK parameters for didanosine; ddI is only mentioned as a structural comparison. |
| PGx | Englund_2004 | not_relevant | 2 | 5 | Reports viral resistance mutations and clinical progression, not a gene variant effect on didanosine PK/PD parameters. |
| popPK | Erameh_2020 | irrelevant | 0 | 0 | This is a study protocol for ribavirin PK in Lassa fever; didanosine is not involved and no numeric PK values are present. |
| popPK | Fauchet_2013 | irrelevant | 0 | 0 | This is a population PK study of zidovudine, not didanosine; no didanosine parameters are reported. |
| popPK | Galinsky_1991 | relevant | 7 | 4 | Rat PK study of didanosine with compartmental modeling, but numeric model parameters (CL, V, k) are not present in the abstract evidence. |
| PGx | Gallien_2017 | not_relevant | 0 | 0 | The paper reports CYP2B6 effects on efavirenz PK/PD, not on didanosine, which is only mentioned as part of the regimen. |
| PGx | Gong_1993 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype is studied; effects are from AICA riboside co-treatment, not pharmacogenomics. |
| popPK | Greenberg_2022 | irrelevant | 0 | 0 | This is a population PK study of moxifloxacin in children; didanosine is only mentioned as a concomitant medication of interest, with no didanosine PK parameters reported. |
| popPK | Hamzah_2017 | irrelevant | 0 | 0 | This is a tenofovir renal tubulopathy risk-factor cohort study; didanosine is only a co-administered risk factor, with no PK parameters for didanosine reported. |
| PGx | Han_2005 | not_relevant | 2 | 3 | Reports HIV drug-resistance mutations affecting treatment efficacy, not a host gene variant altering didanosine PK/PD parameters. |
| popPK | Harb_1996 | irrelevant | 0 | 0 | no_text gate: only 97 chars of text extracted (&lt; 400) |
| popPK | Hirt_2009 | relevant | 8 | 3 | Population PK model (NONMEM, one-compartment) for didanosine in HIV-infected children, but numeric CL/V values are not shown in the abstract text. |
| popPK | Hirt_2009_2 | irrelevant | 0 | 0 | The PK model and parameters (CL 0.211 L/h/kg, V 4.48 L/kg) are for efavirenz; didanosine is only a co-administered drug with no didanosine PK parameters reported. |
| popPK | Hoglund_2015 | irrelevant | 0 | 0 | Didanosine is only mentioned as a co-administered NRTI in the HIV treatment background; the paper models artemether/lumefantrine and their metabolites, with no didanosine PK parameters. |
| PGx | Holodniy_1993 | not_relevant | 2 | 3 | Reports viral load/CD4 changes on ZDV+ddI therapy and HIV pol resistance mutations, not a host gene variant effect on didanosine PK/PD parameters. |
| popPK | Homkham_2019 | irrelevant | 0 | 0 | This is a population PK-PD study of efavirenz in HIV-infected children; didanosine is only a co-administered NRTI backbone drug (n=3) with no didanosine PK parameters reported. |
| popPK | Huang_2023 | irrelevant | 0 | 0 | The paper reports population PK of the monoclonal antibody VRC01, not didanosine; didanosine is not mentioned at all. |
| PGx | Hulgan_2008 | not_relevant | 3 | 5 | Reports genetic associations with lipoatrophy (toxicity outcome), not a PK or PD parameter of didanosine. |
| popPK | Innes_2018 | irrelevant | 0 | 0 | This is a population PK study of stavudine (stavudine triphosphate), not didanosine; didanosine is only mentioned as an excluded concomitant drug. |
| PGx | Japour_1996 | not_relevant | 4 | 5 | Only a viral phenotype (syncytium-inducing vs non-syncytium) is descriptively associated with response; no host gene variant effect on ddI PK/PD parameters with fitted effect sizes is reported. |
| popPK | Jin_2011 | irrelevant | 3 | 2 | A prodrug delivery study in mice reporting only bioavailability percentages, with no CL/V/ka or compartmental PK parameters for didanosine itself. |
| popPK | Kpanou_2021 | irrelevant | 0 | 0 | This is a deep-learning DDI prediction benchmarking study with no didanosine PK parameters or numeric disposition values. |
| popPK | Li_2001 | irrelevant | 2 | 5 | In-vitro transporter kinetics (Km/Vmax of didanosine transport via rat CNT2 in oocytes), not disposition/PK parameters (CL, V, half-life) for didanosine. |
| popPK | Mirochnick_1999 | irrelevant | 0 | 0 | This is a population PK study of zidovudine; didanosine is only mentioned as a co-administered drug with no didanosine parameters reported. |
| popPK | Mole_2001 | irrelevant | 2 | 0 | Didanosine is only co-administered; PK sampling was performed for indinavir and ritonavir, with no didanosine disposition parameters reported. |
| popPK | Murata_2022 | irrelevant | 2 | 0 | This is a review of CNS/IVIVE-PBPK methodology; didanosine (2',3'-dideoxyinosine) is only mentioned as a compound in a summary table of literature brain models, with no numeric didanosine PK parameters present in the evidence. |
| popPK | Nacro_2011 | relevant | 5 | 1 | A PK study of didanosine in HIV-infected children, but the abstract contains no numeric disposition parameters; values likely in the full text/tables not provided. |
| popPK | Ngara_2020 | irrelevant | 0 | 0 | The paper models atazanavir and ritonavir in hair; didanosine appears only as a co-administered backbone regimen in one table row, with no didanosine PK parameters. |
| popPK | Nikanjam_2022 | irrelevant | 0 | 0 | The paper models efavirenz pharmacokinetics in children; didanosine is not the subject drug and no didanosine parameters appear. |
| PGx | Nunziata_2026 | not_relevant | 3 | 2 | Case report of ABCA4 retinopathy exacerbated by didanosine toxicity; no PK/PD parameter or fitted pharmacogenomic effect reported. |
| PGx | Peltenburg_2019 | not_relevant | 2 | 5 | ITPase activity is associated with metabolic events (PD safety outcome) for abacavir, but no association was found for didanosine and no PK/PD parameter effect is reported. |
| popPK | Piana_2014 | irrelevant | 0 | 0 | The paper is about lamivudine PK in HIV-infected children; didanosine is not the subject drug and no didanosine parameters appear. |
| PGx | Prosperi_2012 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effect on didanosine PK/PD is reported; only HIV subtype and clinical predictors of toxicity-related discontinuation. |
| PGx | Pérez-Olmeda_2003 | not_relevant | 0 | 0 | Only mentions one didanosine-related pancreatitis case; no gene variant/genotype effect on didanosine PK/PD reported. |
| popPK | Rabie_2022 | irrelevant | 1 | 1 | In vitro antiviral/docking repurposing study; only a passing mention of DDI half-life &lt;2 h and Tmax 0.5–1.5 h from literature, no PK model or disposition parameters. |
| PGx | Ribera_2005 | not_relevant | 2 | 3 | Reports clinical efficacy/safety and HIV resistance mutations after virological failure, not a pharmacogenomic effect on didanosine PK/PD parameters. |
| popPK | Robinson_2000 | irrelevant | 0 | 0 | In-vitro antiviral activity study of BMS-232632; didanosine is only a combination agent, no PK parameters reported. |
| popPK | Sabo_2000 | irrelevant | 0 | 0 | Didanosine is only a background co-administered drug; the PK parameters reported are for nevirapine and lamivudine, not didanosine. |
| PGx | Schaefer_2006 | not_relevant | 3 | 4 | Didanosine is only used as a cis-inhibitor of ABCB1 transport in vitro; no PK/PD parameter of didanosine itself is reported by genotype. |
| popPK | Schotland_2018 | irrelevant | 0 | 0 | This is a pharmacovigilance/adverse-event prediction study with no didanosine PK parameters; didanosine is not even mentioned. |
| PGx | Soriano_2006 | not_relevant | 0 | 0 | No pharmacogenomic effect on didanosine PK/PD parameters is reported; only a clinical recommendation to replace didanosine due to mitochondrial toxicity risk. |
| PGx | Soriano_2007 | not_relevant | 0 | 0 | Review of HCV/HIV treatment; only mentions didanosine-ribavirin interaction warning, no gene variant effect on PK/PD parameters. |
| popPK | Sriram_2007 | irrelevant | 1 | 2 | In vitro prodrug synthesis/anti-HIV study; only plasma hydrolysis half-lives, no PK disposition parameters for didanosine. |
| PGx | Sulkowski_2013 | not_relevant | 0 | 0 | Didanosine is only mentioned as an excluded concomitant medication; no gene variant effects on its PK/PD are reported. |
| popPK | Tanaka_1997 | irrelevant | 0 | 0 | This is a natural-product discovery paper about chloropeptins; didanosine is only a co-administered comparator in in vitro synergy assays, with no PK parameters reported. |
| popPK | Tatsunami_1998 | relevant | 8 | 3 | Population/compartmental PK model of didanosine in two patients, but numeric parameter values are not shown in the provided evidence. |
| popPK | Taylor_2000 | irrelevant | 0 | 0 | This is an in-vitro antiviral drug-resistance study of dOTC; didanosine appears only as a comparator and no PK parameters are reported. |
| popPK | Tobin_1996 | irrelevant | 0 | 0 | In-vitro antiviral EC50 assay with no didanosine PK parameters; didanosine (ddI) not even a focus. |
| PGx | Torti_2005 | not_relevant | 3 | 3 | No gene variant/genotype effect on didanosine PK/PD is reported; efavirenz levels and resistance mutations are discussed without pharmacogenomic quantification. |
| PGx | Tran_2001 | not_relevant | 0 | 0 | No pharmacogenomic variant/genotype effects on didanosine PK/PD are reported; only a formulation (buffered) interaction with delavirdine absorption is mentioned. |
| popPK | Tunc_2023 | irrelevant | 3 | 2 | HIV within-host modelling study; didanosine PK parameters (ka, ke, F, D) are said to be in Table 1/Supplementary Information, but no numeric didanosine PK values appear in the evidence. |
| PGx | Velasque_2005 | not_relevant | 3 | 4 | Paper estimates genetic components (RGC) of didanosine PK variability but reports no specific gene variant/genotype effect on any PK parameter; covariates are only sex and creatinine clearance. |
| PGx | Vispo_2013 | not_relevant | 3 | 5 | Reports genetic associations with didanosine-induced NCPH risk (toxicity susceptibility), not an effect on a PK or PD parameter. |
| PGx | Weiss_2007 | not_relevant | 0 | 0 | In vitro BCRP inhibition assay with no gene variant/genotype effect on didanosine PK/PD parameters. |
| popPK | Winter_1996 | irrelevant | 0 | 0 | In-vitro anti-HIV chemistry study; didanosine only mentioned as a metabolic activation reference, no PK parameters. |
| popPK | Witvrouw_2004 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility (EC50) study, not a pharmacokinetic study; no disposition parameters for didanosine are reported. |
| PGx | de_2000 | not_relevant | 3 | 4 | Reports HIV resistance mutations (codons 184, 74) emerging on treatment affecting virologic response, not a host pharmacogenomic effect on didanosine PK/PD parameters. |
| PGx | unknown_2005 | not_relevant | 0 | 0 | No pharmacogenomic effect on didanosine PK/PD parameters is reported; only a general safety note about lactic acidosis risk with didanosine during HCV treatment. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:10 UTC</sub>
