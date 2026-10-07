<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;zanamivir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zanamivir_Wollacott2016_reference&quot;,&quot;label&quot;:&quot;Wollacott_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Wollacott2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zanamivir_Zuo2020_base&quot;,&quot;label&quot;:&quot;Zuo_2020_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Zuo2020_base.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zanamivir_Zuo2020_final&quot;,&quot;label&quot;:&quot;Zuo_2020_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Zuo2020_final.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Zanamivir_Zuo2020_full&quot;,&quot;label&quot;:&quot;Zuo_2020_full&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zanamivir/Zanamivir_Zuo2020_full.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# zanamivir

- **generic name:** zanamivir
- **ATC codes:** `J05AH01`
- **DrugBank:** [DB00558](https://go.drugbank.com/drugs/DB00558) · **PubChem:** [CID 60855](https://pubchem.ncbi.nlm.nih.gov/compound/60855)
- **molar mass:** 332.3098 g/mol (C12H20N4O7) — DrugBank
- **groups:** approved, investigational

## About

Zanamivir is an antiviral medicine used to treat and prevent influenza. It is authorised in the European Union for human influenza and remains an approved drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q146075](https://www.wikidata.org/wiki/Q146075) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zanamivir | parent | 332.31 | C12H20N4O7 | DrugBank | [60855](https://pubchem.ncbi.nlm.nih.gov/compound/60855) | Brown_2011, Zuo_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:26 | 16:42 | 4/0/1 | 0/0/1 | 0/0/0 | 465,316/80,084 | openai / gpt-6-luna | 30 | 1/20 | 30/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Wollacott_2016_reference](drugs/drug_zanamivir/Zanamivir_Wollacott2016_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wollacott AM et al., Safety and Upper Respiratory Pharmacoki…, EBioMedicine (2016) | [10.1016/j.ebiom.2016.02.021](https://doi.org/10.1016/j.ebiom.2016.02.021) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zuo_2020_base](drugs/drug_zanamivir/Zanamivir_Zuo2020_base.md) | ▶ model + simulator | 2-compartment, IV | 4 | Zuo P et al., Population Pharmacokinetic/Pharmacodyna…, Clinical and translational… (2020) | [10.1111/cts.12697](https://doi.org/10.1111/cts.12697) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zuo_2020_final](drugs/drug_zanamivir/Zanamivir_Zuo2020_final.md) | ▶ model + simulator | 2-compartment, IV | 4 (+4 cov.) | Zuo P et al., Population Pharmacokinetic/Pharmacodyna…, Clinical and translational… (2020) | [10.1111/cts.12697](https://doi.org/10.1111/cts.12697) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zuo_2020_full](drugs/drug_zanamivir/Zanamivir_Zuo2020_full.md) | ▶ model + simulator | 2-compartment, IV | 4 (+4 cov.) | Zuo P et al., Population Pharmacokinetic/Pharmacodyna…, Clinical and translational… (2020) | [10.1111/cts.12697](https://doi.org/10.1111/cts.12697) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Brown_2011_reference](drugs/drug_zanamivir/Zanamivir_Brown2011_reference.md) | — | 1-compartment (no model) | 3 | Brown AN et al., Effect of half-life on the pharmacodyna…, Antimicrobial agents and ch… (2011) | [10.1128/AAC.01629-10](https://doi.org/10.1128/AAC.01629-10) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Brown_2011_log_10_viral_load](drugs/drug_zanamivir/pd_Brown_2011_log_10_viral_load.md) | log(10) viral load ← zanamivir · indirect response — drug inhibits the production of log(10) viral load | model (no simulator) | Brown AN et al., Effect of half-life on the pharmacodyna…, Antimicrobial agents and ch… (2011) | [10.1128/AAC.01629-10](https://doi.org/10.1128/AAC.01629-10) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zanamivir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: NEU2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 227 matched, 86 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 5  ·  extracted 4  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Peng_2000.pdf` | Peng AW et al., A population pharmacokinetic analysis o…, Journal of clinical pharmac… (2000) | popPK | 10 | [10.1177/00912700022008900](https://doi.org/10.1177/00912700022008900) | [10709152](https://pubmed.ncbi.nlm.nih.gov/10709152) | Human population-PK modeling is reported, but the only numeric PK values shown are relative bioavailabilities (2.3 and 1.6), not disposition parameters such as CL or V. |
| `Weller_2013.pdf` | Weller S et al., Safety, tolerability and pharmacokineti…, Antiviral therapy (2013) | popPK | 9 | [10.3851/IMP2631](https://doi.org/10.3851/IMP2631) | [23696221](https://pubmed.ncbi.nlm.nih.gov/23696221) | The study evaluates human zanamivir pharmacokinetics, but no numeric parameter values are provided. |
| `Brown_2011.pdf` | Brown AN et al., Effect of half-life on the pharmacodyna…, Antimicrobial agents and ch… (2011) | popPK | 8 | [10.1128/AAC.01629-10](https://doi.org/10.1128/AAC.01629-10) | [21263045](https://pubmed.ncbi.nlm.nih.gov/21263045) | The population PK/PD model uses numeric zanamivir half-lives of 2.5 and 8 hours, but no clearance or volume values are shown. |

<sub>queue written 2026-10-07T16:12:36.091476+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andreev_2024 | irrelevant | 0 | 0 | This is an in-vitro antiviral susceptibility study and reports no zanamivir pharmacokinetic parameters. |
| popPK | Barker_2014 | irrelevant | 0 | 0 | This is a review and provides no numeric zanamivir disposition parameters. |
| popPK | Baum_2003 | irrelevant | 0 | 0 | This is an in-vitro neuraminidase inhibition study and reports no zanamivir disposition parameters. |
| PGx | Bay_2025 | not_relevant | 0 | 0 | The review mentions neuraminidase-inhibitor resistance but reports no zanamivir gene-variant effect on a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Buchholz_2026 | irrelevant | 0 | 0 | This is a review and provides no numeric zanamivir disposition parameters. |
| popPK | Canini_2011 | irrelevant | 0 | 0 | This models influenza virus kinetics and symptoms in volunteers, not zanamivir pharmacokinetics. |
| popPK | Deng_2020 | irrelevant | 0 | 0 | The study reports PK for MHAA4549A and oseltamivir, not zanamivir; no zanamivir parameter values are provided. |
| popPK | Duval_2010 | irrelevant | 1 | 0 | This human efficacy trial reports no quantitative zanamivir disposition or population-PK parameters. |
| popPK | Flicoteaux_2017 | irrelevant | 0 | 0 | This human adherence study reports no quantitative zanamivir pharmacokinetic disposition parameters. |
| popPK | Francesconi_2018 | irrelevant | 0 | 0 | Zanamivir is only an antiviral comparator; no zanamivir pharmacokinetic parameters are reported. |
| popPK | Grahl_2021 | irrelevant | 0 | 0 | This is a computational docking study and reports no quantitative zanamivir disposition parameters. |
| popPK | Gupta_2016 | irrelevant | 0 | 0 | The paper reports PK for MHAA4549A, not zanamivir. |
| popPK | Hariono_2016 | irrelevant | 0 | 0 | This is an in vitro inhibitor study with zanamivir only as a comparator and reports no zanamivir disposition parameters. |
| popPK | Hayden_1994 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study and reports no zanamivir disposition parameters. |
| popPK | Jacob_2016 | irrelevant | 0 | 0 | This study examines amantadine resistance in vitro and reports no zanamivir disposition parameters. |
| popPK | Jefferson_2014 | irrelevant | 1 | 0 | This review reports clinical efficacy and harms, not quantitative zanamivir disposition parameters. |
| PGx | Kerdsiri_2026 | not_relevant | 0 | 0 | The study predicts general ADMET properties of zanamivir but reports no gene variant, genotype, or phenotype effects on its PK or PD parameters. |
| popPK | Kumar_2025 | irrelevant | 0 | 0 | This computational drug–target affinity study reports no quantitative zanamivir disposition parameters. |
| popPK | Li_2006 | irrelevant | 0 | 0 | This is a synthesis and antiviral-activity study, with no zanamivir disposition parameters reported. |
| PGx | Li_2023 | not_relevant | 0 | 0 | No zanamivir pharmacogenomic effect is reported; no neuraminidase inhibitor-resistant variants were detected, and the reported variant association concerned baloxavir. |
| popPK | Liu_2011 | irrelevant | 0 | 0 | This is a cell-based prodrug activity study and reports no zanamivir disposition parameters. |
| popPK | Luo_2025 | irrelevant | 0 | 0 | Zanamivir is only tested as an antiviral combination partner, with no zanamivir pharmacokinetic parameters reported. |
| PGx | Naeem_2026 | not_relevant | 0 | 0 | The paper reports no genotype-associated change in a zanamivir PK or PD parameter; it only notes that zanamivir remained comparatively potent. |
| popPK | Okella_2022 | irrelevant | 0 | 0 | This study predicts ADMET properties for catfish antimicrobial peptides, not zanamivir; its numeric PK-like values are for those peptides. |
| popPK | Peng_2000 | relevant | 10 | 4 | Human population-PK modeling is reported, but the only numeric PK values shown are relative bioavailabilities (2.3 and 1.6), not disposition parameters such as CL or V. |
| popPK | Rosales-Mendoza_2020 | irrelevant | 0 | 0 | This review does not study zanamivir or report its numeric pharmacokinetic parameters. |
| popPK | Sarkar_2026 | irrelevant | 0 | 0 | This is a quercetin review and reports no zanamivir pharmacokinetic parameters. |
| popPK | Schöning_2022 | irrelevant | 0 | 0 | The study models molnupiravir; zanamivir is only mentioned as an example, with no zanamivir parameter values reported. |
| popPK | Shie_2011 | irrelevant | 0 | 0 | This is a synthesis and in-vitro antiviral activity study with no quantitative zanamivir pharmacokinetic parameters. |
| popPK | Sidwell_2002 | irrelevant | 0 | 0 | This review concerns peramivir; zanamivir is only an in-vitro comparator, with no zanamivir disposition parameters reported. |
| popPK | Smee_2001 | irrelevant | 0 | 0 | This is an in-vitro antiviral activity study and reports no zanamivir pharmacokinetic parameters. |
| popPK | Smee_2001_2 | irrelevant | 0 | 0 | Zanamivir is only mentioned as a cross-resistance comparator, with no zanamivir pharmacokinetic parameters reported. |
| popPK | Smee_2002 | irrelevant | 0 | 0 | This in-vitro antiviral activity study reports zanamivir EC50 values, not pharmacokinetic disposition parameters. |
| popPK | Sugaya_2012 | irrelevant | 0 | 0 | This is a pediatric peramivir study and reports no zanamivir pharmacokinetic parameters. |
| popPK | Ting_2014 | irrelevant | 0 | 0 | This is a tobramycin study; zanamivir is only mentioned as a prior study, with no zanamivir parameter values provided. |
| popPK | Tonelli_2017 | irrelevant | 0 | 0 | Zanamivir is only an antiviral comparator; no zanamivir pharmacokinetic disposition parameters are reported. |
| popPK | Torabfam_2025 | irrelevant | 0 | 0 | Zanamivir is only mentioned as a prior in-silico candidate, with no zanamivir pharmacokinetic parameters reported. |
| popPK | Triana-Baltzer_2009 | irrelevant | 0 | 0 | This is an in-vitro antiviral-sensitivity study, not a PK study; zanamivir EC50 values are referenced in Table 1, which is not provided. |
| popPK | Vandevelde_2015 | irrelevant | 0 | 0 | Zanamivir is only an in-vitro probe, and no pharmacokinetic parameters are reported. |
| popPK | Wagaman_2002 | irrelevant | 0 | 0 | This is an in vitro antiviral assay reporting zanamivir EC50, not pharmacokinetic disposition parameters. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The quantitative population-PK model is for oseltamivir, not zanamivir. |
| popPK | Weller_2013 | relevant | 9 | 0 | The study evaluates human zanamivir pharmacokinetics, but no numeric parameter values are provided. |
| popPK | Wen_2010 | irrelevant | 0 | 0 | This is an inhibitor-design study reporting enzyme and antiviral activity, not zanamivir disposition parameters. |
| popPK | Wildschut_2012 | irrelevant | 0 | 0 | This is a review of drug disposition in children and provides no zanamivir parameters or numeric values. |
| popPK | Wollacott_2016 | irrelevant | 0 | 0 | The reported pharmacokinetic values are for VIS410; zanamivir is mentioned only as background. |
| popPK | Wongnak_2025 | irrelevant | 0 | 0 | This study models influenza viral clearance in untreated adults and reports no zanamivir pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 16:12 UTC</sub>
