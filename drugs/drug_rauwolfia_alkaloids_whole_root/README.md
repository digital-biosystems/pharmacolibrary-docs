<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;rauwolfia alkaloids, whole root&quot;}]"></div>

# rauwolfia alkaloids, whole root

- **generic name:** rauwolfia alkaloids, whole root
- **ATC codes:** `C02AA04`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 20:23 | 17:58 | 0/0/0 | 0/0/0 | 0/0/0 | 99,219/2,951 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 2/7 | 8/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 168 matched, 51 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2021.pdf` | Wang N et al., Simultaneous determination of five alka…, Journal of separation scien… (2021) | popPK | 10 | [10.1002/jssc.202000914](https://doi.org/10.1002/jssc.202000914) | [33470534](https://pubmed.ncbi.nlm.nih.gov/33470534) | The paper is a pharmacokinetic study of Rauvolfia alkaloids in rats, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-09-27T20:23:13.247986+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ansah_2003 | irrelevant | 0 | 0 | The paper studies the mechanism of action of UK14304 on serotonin transporters and does not involve rauwolfia_alkaloids_whole_root or report pharmacokinetic parameters. |
| popPK | Antonaccio_1990 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of sotalol, not rauwolfia_alkaloids_whole_root. |
| popPK | Bernstein_2003 | irrelevant | 0 | 0 | The paper studies the biopersistence of asbestos fibers (chrysotile and tremolite) in the lung, not the pharmacokinetics of rauwolfia_alkaloids_whole_root. |
| popPK | Bernstein_2004 | irrelevant | 0 | 0 | The paper studies the biopersistence of chrysotile asbestos in rats, not the pharmacokinetics of rauwolfia_alkaloids_whole_root. |
| popPK | Bernstein_2005 | irrelevant | 0 | 0 | The paper studies the biopersistence of chrysotile asbestos fibers, not the pharmacokinetics of rauwolfia_alkaloids_whole_root. |
| popPK | Cao_2021 | irrelevant | 0 | 0 | The paper investigates norepinephrine transporter (NET) kinetics in murine cardiac tissue and does not report pharmacokinetic parameters for rauwolfia_alkaloids_whole_root. |
| popPK | Chapman_1991 | irrelevant | 2 | 0 | The study focuses on reserpine (a specific alkaloid) rather than the whole root extract, and it reports only qualitative detection limits and duration without providing quantitative PK parameters like clearance or volume. |
| popPK | Chen_1993 | irrelevant | 0 | 0 | The study investigates the efficacy of amoxicillin in preventing reserpine-induced gastric ulcers and does not report any pharmacokinetic parameters for rauwolfia alkaloids. |
| popPK | Elbe_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of omeprazole, midazolam, and yohimbine, not rauwolfia_alkaloids_whole_root. |
| popPK | Futrakul_2004 | irrelevant | 0 | 0 | The paper is a clinical study on renal hemodynamics in FSGS nephrosis and does not report pharmacokinetic parameters for rauwolfia_alkaloids_whole_root. |
| popPK | Garber_2001 | irrelevant | 0 | 0 | The study focuses on the renal protective effects of enalapril and irbesartan in rats and does not involve rauwolfia_alkaloids_whole_root or report its pharmacokinetic parameters. |
| popPK | Haass-Koffler_2023 | irrelevant | 0 | 0 | The study investigates mifepristone and alcohol pharmacokinetics, not rauwolfia_alkaloids_whole_root. |
| popPK | Jovanović_2002 | irrelevant | 0 | 0 | The study investigates the effects of captopril on renal function in rats, not the pharmacokinetics of rauwolfia alkaloids. |
| popPK | LOVE_1965 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | Lanza_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of CR4056 in rats and does not report pharmacokinetic parameters for rauwolfia_alkaloids_whole_root. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The study investigates the effect of phenylephrine on alveolar fluid clearance in rats and does not involve rauwolfia_alkaloids_whole_root or pharmacokinetic parameters. |
| popPK | Lillethorup_2018 | irrelevant | 0 | 0 | The study investigates PET imaging of monoaminergic systems in minipigs using radiotracers like [11C]-yohimbine, not the pharmacokinetics of rauwolfia_alkaloids_whole_root. |
| popPK | Linderman_2026 | irrelevant | 0 | 0 | The paper studies dopamine and ATP transmission in the brain using FSCV and does not involve the drug rauwolfia_alkaloids_whole_root. |
| popPK | Ludwig_2025 | irrelevant | 0 | 0 | The paper is a historical analysis of pharmacology textbooks regarding pilocarpine and physostigmine, not a pharmacokinetic study of rauwolfia_alkaloids_whole_root. |
| popPK | Maideen_2021 | irrelevant | 0 | 0 | The paper is a review of beta-blocker interactions and does not report pharmacokinetic parameters for rauwolfia_alkaloids_whole_root. |
| popPK | Makarov_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of norsulfazole, not rauwolfia_alkaloids_whole_root. |
| popPK | Manda_2016 | irrelevant | 0 | 0 | The paper focuses on the discovery of fascaplysin as a P-gp inducer and does not report pharmacokinetic parameters for rauwolfia_alkaloids_whole_root. |
| popPK | Min_1989 | irrelevant | 0 | 0 | The study focuses on skin flap hemodynamics and uses reserpine (a different drug) as an intervention, with no pharmacokinetic data for rauwolfia_alkaloids_whole_root. |
| popPK | Murahata_2014 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of xylazine and its antagonists on diuresis in cats and does not involve rauwolfia_alkaloids_whole_root or report its pharmacokinetic parameters. |
| popPK | Murahata_2014_2 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of medetomidine, atipamezole, yohimbine, and prazosin in cats, and does not involve rauwolfia_alkaloids_whole_root or report its pharmacokinetic parameters. |
| popPK | Nakano_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of MPC-1304, not rauwolfia_alkaloids_whole_root. |
| popPK | Okamoto_2012 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of atomoxetine and yohimbine on blood pressure, not the pharmacokinetics of rauwolfia_alkaloids_whole_root. |
| popPK | Opretzka_2023 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of cleomin, not the pharmacokinetics of rauwolfia_alkaloids_whole_root. |
| popPK | Paleacu_2007 | irrelevant | 0 | 0 | The paper is a review of tetrabenazine, not rauwolfia_alkaloids_whole_root, and does not report PK parameters for the target drug. |
| popPK | Phan_2015 | irrelevant | 0 | 0 | The study focuses on the PET binding potential of [(11)C]yohimbine, not the pharmacokinetic disposition parameters of rauwolfia_alkaloids_whole_root. |
| popPK | Raffel_1999 | irrelevant | 0 | 0 | The study investigates the kinetics of [11C]phenylephrine in isolated rat hearts, not the pharmacokinetics of rauwolfia_alkaloids_whole_root. |
| popPK | SMITH_1965 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| popPK | Saini_2026 | irrelevant | 0 | 0 | The study investigates the antidepressant effects of Indian mustard honey, not the pharmacokinetics of rauwolfia_alkaloids_whole_root. |
| popPK | Shafi_2000 | irrelevant | 0 | 0 | The study focuses on the effects of reserpine on LDL receptor expression and lipid levels, not on the pharmacokinetic parameters of rauwolfia_alkaloids_whole_root. |
| popPK | Shafi_2002 | irrelevant | 0 | 0 | The study focuses on the anti-atherosclerotic effects of reserpine (a specific alkaloid, not the whole root extract) on lipids and does not report pharmacokinetic parameters for rauwolfia_alkaloids_whole_root. |
| popPK | Sharaf_2016 | irrelevant | 2 | 0 | The paper describes an analytical method for reserpine (a rauwolfia alkaloid) but does not report quantitative pharmacokinetic parameters (CL, V, etc.) in the provided evidence. |
| popPK | Shou_1997 | irrelevant | 0 | 0 | The study focuses on the effects of benidipine on antioxidant enzymes in hypertensive rats and does not report pharmacokinetic parameters for rauwolfia_alkaloids_whole_root. |
| popPK | Song_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of leelamine, not rauwolfia_alkaloids_whole_root. |
| popPK | Sordelli_1979 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Stanton_1987 | irrelevant | 0 | 0 | The study investigates the renal physiological effects of an alpha-2 adrenoceptor agonist (B-HT 933) and antagonist (yohimbine) in rats, and does not report pharmacokinetic parameters for rauwolfia alkaloids. |
| popPK | Stjärne_1994 | irrelevant | 0 | 0 | The study investigates the clearance of noradrenaline in rat tail arteries, not the pharmacokinetics of rauwolfia_alkaloids_whole_root. |
| popPK | Sutherland_1966 | irrelevant | 0 | 0 | The paper studies capillary permeability in rat hearts using Evans Blue-albumin and does not report pharmacokinetic parameters for rauwolfia_alkaloids_whole_root. |
| popPK | Szabo_1992 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of yohimbine on norepinephrine release in rabbits and does not involve rauwolfia_alkaloids_whole_root or report its pharmacokinetic parameters. |
| popPK | Szemerédi_2026 | irrelevant | 0 | 0 | The study focuses on bacterial efflux pump inhibitors and antimicrobial resistance in E. coli, not the pharmacokinetics of rauwolfia alkaloids. |
| popPK | Tanaka_1986 | irrelevant | 0 | 0 | The study investigates the cerebral blood flow effects of budralazine and other antihypertensives, not the pharmacokinetics of rauwolfia_alkaloids_whole_root. |
| popPK | Tranova_2025 | irrelevant | 0 | 0 | The study is an in-vitro transporter assay using methotrexate, mitoxantrone, and quercetin, and does not report pharmacokinetic parameters for rauwolfia_alkaloids_whole_root. |
| popPK | Wang_2021 | relevant | 10 | 0 | The paper is a pharmacokinetic study of Rauvolfia alkaloids in rats, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Wei_2013 | irrelevant | 0 | 0 | The study investigates curcumin didecanoate, not rauwolfia_alkaloids_whole_root. |
| popPK | Xiang_2017 | irrelevant | 0 | 0 | The study focuses on yohimbine, not rauwolfia_alkaloids_whole_root, and does not report PK parameters for the target drug. |
| popPK | Zhang_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and resistance mechanisms of danofloxacin, not rauwolfia_alkaloids_whole_root. |
| popPK | Zou_2026 | irrelevant | 0 | 0 | The paper describes a microfluidic chip for lipid nanoparticle purification and does not involve rauwolfia_alkaloids_whole_root or pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
