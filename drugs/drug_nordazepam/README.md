<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;nordazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nordazepam_Klotz1975_reference&quot;,&quot;label&quot;:&quot;Klotz_1975_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nordazepam/Nordazepam_Klotz1975_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nordazepam

- **generic name:** nordazepam
- **ATC codes:** `N05BA16`
- **DrugBank:** [DB14028](https://go.drugbank.com/drugs/DB14028) · **PubChem:** not captured
- **molar mass:** 270.714 g/mol (C15H11ClN2O) — DrugBank
- **groups:** investigational

## About

Nordazepam is a benzodiazepine derivative with anxiolytic (calming) effects, developed for the treatment of anxiety. It is considered an investigational drug and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3180288](https://www.wikidata.org/wiki/Q3180288) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desmethyldiazepam | parent | 270.714 | C15H11ClN2O | DrugBank | — | Wilensky_1978 |
| nordazepam | parent | — (mass units only) | C15H11ClN2O | — | — | — |
| clorazepate | metabolite | 314.725 | C16H11ClN2O3 | PubChem | [2809](https://pubchem.ncbi.nlm.nih.gov/compound/2809) | Wilensky_1978 |
| desmethyldiazepam (nordazepam) | metabolite | 270.716 | C15H11ClN2O | PubChem | [2997](https://pubchem.ncbi.nlm.nih.gov/compound/2997) | Löscher_1981 |
| diazepam | metabolite | 284.743 | C16H13ClN2O | PubChem | [3016](https://pubchem.ncbi.nlm.nih.gov/compound/3016) | Löscher_1981 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:47 | 10:22 | 2/3/0 | 0/1/0 | 0/0/0 | 243,033/16,210 | ollama / glm-5.3-flash | 6 | 2/3 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Klotz_1975_reference](drugs/drug_nordazepam/Nordazepam_Klotz1975_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Klotz U et al., The effects of age and liver disease on…, The Journal of clinical inv… (1975) | [10.1172/JCI107938](https://doi.org/10.1172/JCI107938) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wilensky_1978_reference](drugs/drug_nordazepam/Nordazepam_Wilensky1978_reference.md) | held back | 1-compartment, oral | 4 | Wilensky AJ et al., Clorazepate kinetics in treated epilept…, Clinical pharmacology and t… (1978) | [10.1002/cpt197824122](https://doi.org/10.1002/cpt197824122) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Bertler_1983_reference](drugs/drug_nordazepam/Nordazepam_Bertler1983_reference.md) | — | general linear (no model) | 2 | Bertler A et al., Pharmacokinetics of chlorazepate after…, Psychopharmacology (1983) | [10.1007/BF00436160](https://doi.org/10.1007/BF00436160) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Löscher_1981_reference](drugs/drug_nordazepam/Nordazepam_Lscher1981_reference.md) | — | general linear (no model) | 3 | Löscher W et al., Pharmacokinetics of diazepam in the dog, Archives internationales de… (1981) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2020_2_reference](drugs/drug_nordazepam/Nordazepam_Wang2020v2_reference.md) | — | parent + metabolite (no model) | 0 | Wang LL et al., An Experimental Pharmacokinetics Study…, Journal of analytical toxic… (2020) | [10.1093/jat/bkz101](https://doi.org/10.1093/jat/bkz101) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Iwaya_1989_qEEG](drugs/drug_nordazepam/pd_Iwaya_1989_qEEG.md) | quantitative EEG change corresponding to sedation ← N-desmethyldiazepam · inhibition effect | — | Iwaya N et al., Determination of pharmacodynamics of di…, The Japanese journal of psy… (1989) | [10.1111/j.1440-1819.1989.tb03102.x](https://doi.org/10.1111/j.1440-1819.1989.tb03102.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nordazepam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 77 matched, 74 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 5  ·  extracted 2  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wilensky_1978.pdf` | Wilensky AJ et al., Clorazepate kinetics in treated epilept…, Clinical pharmacology and t… (1978) | popPK | 9 | [10.1002/cpt197824122](https://doi.org/10.1002/cpt197824122) | [26493](https://pubmed.ncbi.nlm.nih.gov/26493) | Nordazepam (desmethyldiazepam) is the measured analyte after clorazepate dosing, with full numeric PK parameters (t1/2, V/F, CL, two-compartment model) reported directly in the abstract. |
| `Wang_2020_2.pdf` | Wang LL et al., An Experimental Pharmacokinetics Study…, Journal of analytical toxic… (2020) | popPK | 8 | [10.1093/jat/bkz101](https://doi.org/10.1093/jat/bkz101) | [31965188](https://pubmed.ncbi.nlm.nih.gov/31965188) | Nordazepam PK parameters (one-compartment model, k01_HL and k10_HL half-lives) are reported numerically in the abstract, measured in human oral fluid after diazepam dosing. |
| `Yeates_1986.pdf` | Yeates RA et al., Preliminary study of the pharmacokineti…, Arzneimittel-Forschung (1986) | popPK | 8 | not captured | [3082341](https://pubmed.ncbi.nlm.nih.gov/3082341) | Nordazepam (desmethyldiazepam) PK in volunteers with half-lives and clearance ranges reported in the abstract; V and full model parameters not given. |
| `Löscher_1981.pdf` | Löscher W et al., Pharmacokinetics of diazepam in the dog, Archives internationales de… (1981) | popPK | 7 | not captured | [7337498](https://pubmed.ncbi.nlm.nih.gov/7337498) | Nordazepam (desmethyldiazepam) is quantified as the active metabolite of diazepam in dogs, with an elimination half-life (3.6 hr) reported in the abstract, though no CL/V values are given. |
| `Wang_2020.pdf` | Wang LL et al., Study on the Pharmacokinetics of Diazep…, European journal of drug me… (2020) | popPK | 7 | [10.1007/s13318-020-00614-8](https://doi.org/10.1007/s13318-020-00614-8) | [32219697](https://pubmed.ncbi.nlm.nih.gov/32219697) | Nordazepam PK (as diazepam metabolite) is quantitatively reported with Tmax, Cmax, and elimination half-life in the abstract; no CL/V or compartmental model, but numeric values are present. |
| `Wretlind_1977.pdf` | Wretlind M et al., Disposition of three benzodiazepines af…, Acta pharmacologica et toxi… (1977) | popPK | 7 | not captured | [15399](https://pubmed.ncbi.nlm.nih.gov/15399) | Nordazepam (N-desmethyldiazepam) is quantified as the metabolite of diazepam with a two-compartment model fitted; terminal half-life (62 h) and absorption half-life are given, but CL/V and full fitted parameters are not shown numerically. |
| `Bertler_1983.pdf` | Bertler A et al., Pharmacokinetics of chlorazepate after…, Psychopharmacology (1983) | popPK | 6 | [10.1007/BF00436160](https://doi.org/10.1007/BF00436160) | [6137019](https://pubmed.ncbi.nlm.nih.gov/6137019) | Nordazepam (desmethyldiazepam) is quantified as the metabolite of clorazepate with half-lives reported, but no CL/V or full compartmental parameter values are given. |
| `Klotz_1977.pdf` | Klotz U, [Important factors determining human di…, Fortschritte der Medizin (1977) | popPK | 6 | not captured | [334648](https://pubmed.ncbi.nlm.nih.gov/334648) | Nordazepam (desmethyldiazepam) PK is modeled as the active metabolite of diazepam in humans, but the abstract gives only qualitative comparisons (e.g., eliminated ~3x slower) with no numeric CL/V/T1/2 values, which likely reside in tables/figures not provided. |
| `Crevat-Pisano_1987.pdf` | Crevat-Pisano P et al., Validation of a radioreceptor assay tec…, International journal of cl… (1987) | popPK | 5 | not captured | [3114154](https://pubmed.ncbi.nlm.nih.gov/3114154) | Nordazepam (desmethyldiazepam) plasma concentrations are reported as the active metabolite of diazepam in two patients, but the kinetic parameters (half-lives, two-compartment model) are given for diazepam and global RRA activity, not specifically for nordazepam. |

<sub>queue written 2026-10-06T19:43:36.223652+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Acikgöz_2009 | irrelevant | 3 | 1 | In-vitro hepatocyte biotransformation model of diazepam where nordazepam (desmethyldiazepam) is only a metabolite, with no numeric PK parameter values provided in the evidence. |
| PGx | Acikgöz_2009 | not_relevant | 0 | 0 | In vitro inducer effects on diazepam metabolism in hepatocytes; no gene variant/genotype effect on nordazepam PK/PD. |
| popPK | Acikgöz_2012 | irrelevant | 2 | 2 | In vitro hepatocyte biotransformation study of diazepam; nordazepam (desmethyldiazepam) is only a measured metabolite with concentration data in figures, no PK disposition parameters (CL, V, half-life, model) reported. |
| popPK | Andersson_1994 | irrelevant | 2 | 2 | In-vitro microsomal metabolism study of diazepam (nordazepam is only a metabolite), with enzyme kinetics (Vmax/Km) not disposition parameters, and no numeric values given in the evidence. |
| PGx | Anzenbacherova_2015 | not_relevant | 0 | 0 | Reports drug-drug inhibition of nordazepam formation by rocuronium, not a gene variant/genotype effect on PK/PD. |
| popPK | Crevat-Pisano_1987 | relevant | 5 | 4 | Nordazepam (desmethyldiazepam) plasma concentrations are reported as the active metabolite of diazepam in two patients, but the kinetic parameters (half-lives, two-compartment model) are given for diazepam and global RRA activity, not specifically for nordazepam. |
| popPK | Green_2004 | irrelevant | 0 | 0 | A review on body-size descriptors for PK in obesity with no original nordazepam parameter values reported. |
| PGx | Hansen_2000 | not_relevant | 2 | 3 | Nordazepam (desmethyldiazepam) is only a minor metabolite measured across CYP isoforms; no gene variant/genotype effect on a PK/PD parameter is reported. |
| PGx | Hua_2025 | not_relevant | 0 | 0 | Effects are due to acacetin (herb-drug interaction), not a gene variant/genotype/phenotype; no pharmacogenomic effect on nordazepam PK/PD. |
| PGx | Jones_2007 | not_relevant | 1 | 0 | Mentions polymorphism of drug-metabolizing enzymes only as a general consideration; no gene-variant effect on nordazepam PK/PD reported. |
| PGx | Kenworthy_2001 | not_relevant | 2 | 3 | In vitro enzyme kinetics of CYP3A4 with diazepam/testosterone; no gene variant/genotype effect on nordazepam PK/PD parameters. |
| popPK | Klotz_1975 | relevant | 6 | 2 | The paper includes a rat study dosing desmethyldiazepam (nordazepam) directly after CCl4/bile duct ligation, but the numeric PK values for nordazepam appear only in figures/results not included; the readable numbers are for diazepam, a different drug. |
| popPK | Klotz_1976 | irrelevant | 3 | 3 | Nordazepam (desmethyldiazepam) is only a measured metabolite of diazepam; the disposition parameters (T1/2, CL) reported are for diazepam, with only plasma binding percentages (e.g., 96.6% in man) given for nordazepam, not its own PK model. |
| popPK | Klotz_1977 | relevant | 6 | 3 | Nordazepam (desmethyldiazepam) PK is modeled as the active metabolite of diazepam in humans, but the abstract gives only qualitative comparisons (e.g., eliminated ~3x slower) with no numeric CL/V/T1/2 values, which likely reside in tables/figures not provided. |
| popPK | Ku_2018 | irrelevant | 0 | 0 | This is a population PK study of diazepam (nordazepam is only mentioned as its metabolite N-desmethyldiazepam, not modeled), so no nordazepam parameters are reported. |
| popPK | Kumana_1987 | irrelevant | 2 | 3 | This is a diazepam PK study; nordazepam (desmethyldiazepam) is only a measured metabolite of a different parent drug, and no nordazepam-specific parameter values are given in the abstract. |
| popPK | Mian_2024 | irrelevant | 0 | 0 | Antischistosomal drug-discovery study of meclonazepam analogs; no PK parameters for nordazepam reported. |
| popPK | Norman_1997 | irrelevant | 3 | 4 | This is a diazepam PK study in foals; nordazepam (desmethyldiazepam) appears only as a metabolite with peak concentration and AUC reported, but no disposition parameters (CL, V, half-life) for nordazepam itself. |
| popPK | Pacifici_1983 | irrelevant | 3 | 2 | Nordazepam (N-desmethyldiazepam) appears only as a metabolite of pinazepam, and no quantitative disposition parameters (CL, V, half-life) are reported for it — only pinazepam's rate constants are given numerically. |
| popPK | Sacre_2017 | irrelevant | 2 | 1 | Clinical toxicology time-course study reporting toxicodynetic (clinical) parameters, not PK disposition parameters like CL, V, or half-life; no numeric PK values present. |
| PGx | Skoda_2020 | not_relevant | 2 | 3 | Study examines CAR activation by diazepam/nordazepam in vitro; no gene variant/genotype effect on nordazepam PK or PD parameters is reported. |
| PGx | Zuo_2010 | not_relevant | 0 | 0 | This is a drug-drug interaction study (Ginkgo biloba vs diazepam) with no gene variant/genotype/phenotype effect on nordazepam PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 19:44 UTC</sub>
