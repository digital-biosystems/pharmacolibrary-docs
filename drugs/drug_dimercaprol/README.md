<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;dimercaprol&quot;}]"></div>

# dimercaprol

- **generic name:** dimercaprol
- **ATC codes:** `V03AB09`
- **DrugBank:** [DB06782](https://go.drugbank.com/drugs/DB06782) · **PubChem:** [CID 3080](https://pubchem.ncbi.nlm.nih.gov/compound/3080)
- **molar mass:** 124.225 g/mol (C3H8OS2) — DrugBank
- **groups:** approved

## About

Dimercaprol is a chelating agent used as an antidote, including for lead poisoning. It is an approved medicine and appears on the WHO essential medicines list, so it remains in use, though it is not authorised by the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413968](https://www.wikidata.org/wiki/Q413968) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:06 | 3:54 | 0/0/0 | 0/0/0 | 0/0/0 | 269,363/4,440 | ollama / glm-5.3-flash | 35 | 6/16 | 21/2 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dimercaprol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: Arsenic (chelator), Cadmium (chelator), Lead (chelator), Mercury (chelator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 71 matched, 53 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abu-Absi_2005 | irrelevant | 0 | 0 | Bioartificial liver device characterization study; no dimercaprol PK parameters reported. |
| popPK | Agarwal_2017 | irrelevant | 0 | 0 | This is a medicinal chemistry/anti-HIV efficacy study with no pharmacokinetic parameters for dimercaprol or any related drug. |
| popPK | Armand-Ugón_2010 | irrelevant | 0 | 0 | In vitro HIV resistance study of CCR5 antagonists; no dimercaprol PK parameters at all. |
| popPK | Asempa_2023 | irrelevant | 0 | 0 | This is a PK study of taniborbactam/cefepime, not dimercaprol; no dimercaprol parameters appear. |
| popPK | Bosch_2006 | irrelevant | 0 | 0 | This is an in-vitro HIV integrin-blocking study with no dimercaprol PK data at all. |
| popPK | Briot_2008 | irrelevant | 0 | 0 | Study of FITC-dextran leakage in dogs; dimercaprol is not mentioned and no PK parameters for it exist. |
| popPK | Capra_2003 | irrelevant | 0 | 0 | This is a cell-signaling study of LTD4 in U937 cells; "BAL 9504" is a geranylgeranylation inhibitor, not dimercaprol, and no PK parameters are reported. |
| popPK | Chan_2015 | irrelevant | 0 | 0 | This is a PK study of rifapentine in mice, not dimercaprol; no dimercaprol parameters are reported. |
| popPK | Clewe_2015 | irrelevant | 0 | 0 | The paper is about BAL sampling design for pulmonary distribution using rifampicin as an example; dimercaprol is not mentioned at all. |
| popPK | Conte_2000 | irrelevant | 0 | 0 | This is a PK study of rifapentine (and its metabolite), not dimercaprol; dimercaprol is not mentioned. |
| popPK | Cooper_2010 | irrelevant | 0 | 0 | This is an ozone/20-HETE airway hyper-responsiveness study in mice; dimercaprol is not mentioned and no PK parameters for it appear. |
| popPK | Delanote_2026 | irrelevant | 0 | 0 | Study of BAL galactomannan kinetics in pulmonary aspergillosis; no dimercaprol PK parameters at all. |
| popPK | Eldefrawi_1977 | irrelevant | 0 | 0 | In vitro receptor-binding study of methylmercury; dimercaprol (BAL) is only mentioned as a displacing agent, with no PK parameters for it. |
| popPK | Fliegert_1996 | irrelevant | 0 | 0 | The paper is about lung leukocyte populations in rats, with no pharmacokinetic data or parameters for dimercaprol. |
| popPK | Fonseca_1991 | irrelevant | 0 | 0 | In vitro receptor-binding study of sulfhydryl reagents; dimercaprol (BAL) is only a reagent, no PK parameters. |
| popPK | Gschwendtner_2026 | irrelevant | 0 | 0 | This is a respiratory microbiome study of smoking cessation with no dimercaprol PK data or parameters. |
| popPK | Henjakovic_2008 | irrelevant | 0 | 0 | No dimercaprol PK data; study is about lung allergen sensitization in mice with no pharmacokinetic parameters. |
| popPK | Herzmann_2017 | irrelevant | 0 | 0 | This is an immunology study of pulmonary cytokine responses to M. tuberculosis; no pharmacokinetic parameters for dimercaprol or any drug are reported. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | This is a transcriptomic endotyping study of fibrotic hypersensitivity pneumonitis with no pharmacokinetic parameters for dimercaprol or any drug. |
| popPK | Ito_2021 | irrelevant | 0 | 0 | This is a PK-PD study of the antifungal PC945 in mice, not dimercaprol; no dimercaprol disposition parameters are reported. |
| popPK | Kim_2015 | irrelevant | 0 | 0 | This is an in-vitro airway smooth muscle pharmacology study in mice with methacholine; dimercaprol is not mentioned and no PK parameters exist. |
| popPK | Latinovic_2014 | irrelevant | 0 | 0 | This is an in-vitro HIV/CCR5 binding study of FLSC IgG1 and maraviroc with no dimercaprol PK parameters. |
| popPK | Leung_2022 | irrelevant | 0 | 0 | This is a human gene-environment study of dibutyl phthalate exposure and asthma genetics; no dimercaprol PK parameters are reported anywhere. |
| popPK | Mansour_2025 | irrelevant | 0 | 0 | Metabolomics study of cystic fibrosis BAL biomarkers; no dimercaprol PK parameters reported. |
| popPK | Mawer_2026 | irrelevant | 0 | 0 | Paper is about BAL methodology in interstitial lung disease with no dimercaprol PK data or parameters. |
| popPK | Mosier_2023 | irrelevant | 0 | 0 | This is a murine efficacy study of dodecafluoropentane (DDFPe), a different drug, with no dimercaprol PK parameters reported. |
| popPK | Motos_2019 | irrelevant | 0 | 0 | This is a PK study of ceftolozane and piperacillin in pigs; dimercaprol is not mentioned at all. |
| popPK | Mzyk_2017 | irrelevant | 0 | 0 | The study concerns danofloxacin in calves, not dimercaprol; dimercaprol is not mentioned at all. |
| popPK | Nakamura_2012 | irrelevant | 0 | 0 | In vitro anti-HIV activity study of a PLL-dextran conjugate; no dimercaprol or PK parameters involved. |
| popPK | OWENS_1965 | irrelevant | 0 | 0 | This is a biochemical method paper on glutathione determination; dimercaprol (BAL) appears only as an interfering thiol compound in the assay, with no PK parameters. |
| popPK | Okuyama_1983 | irrelevant | 0 | 0 | This is a cardiac physiology study of pressure-velocity relations in isolated rabbit ventricles; no dimercaprol or any pharmacokinetic parameters are involved. |
| popPK | Park_2003 | irrelevant | 0 | 0 | In vitro bioartificial liver modeling paper with no dimercaprol data or parameters; drug is generic/theoretical. |
| popPK | Raeburn_1994 | irrelevant | 0 | 0 | This is a pharmacodynamics study of the PDE IV inhibitor RP 73401 in guinea-pigs and rats; dimercaprol is not mentioned and no PK parameters for it appear. |
| popPK | Ranganathan_2011 | irrelevant | 0 | 0 | This is a clinical study of inflammation and nutrition in cystic fibrosis with no pharmacokinetic parameters for dimercaprol or any drug. |
| popPK | Sanna_2020 | irrelevant | 0 | 0 | Anti-HIV plant extract study with no dimercaprol PK data or parameters. |
| popPK | Santos_2023 | irrelevant | 0 | 0 | This is a clinical outcomes study of azithromycin prophylaxis in lung transplant recipients, with no dimercaprol PK parameters reported. |
| popPK | Sanz_2025 | irrelevant | 0 | 0 | This is a clinical efficacy study of inhaled ciclesonide in horses with asthma; no dimercaprol PK parameters are reported anywhere. |
| popPK | Sato_2019 | irrelevant | 0 | 0 | The paper investigates exhaled nitric oxide parameters in asthma patients and contains no mention of dimercaprol or pharmacokinetic data. |
| popPK | Shiraishi_2000 | irrelevant | 0 | 0 | This is a medicinal chemistry/CCR5 antagonist paper about TAK-779 with no dimercaprol PK data. |
| popPK | Stephens_2011 | irrelevant | 0 | 0 | Study of sitting and insulin action in humans; no dimercaprol PK parameters reported. |
| popPK | Teng_1995 | irrelevant | 0 | 0 | The paper studies the PAF antagonist CIS-19 in guinea-pigs, not dimercaprol, and contains no PK parameters for it. |
| popPK | Tiev_2013 | irrelevant | 0 | 0 | Study of nitric oxide biomarkers in scleroderma; no dimercaprol PK data at all. |
| popPK | Traylor_2010 | irrelevant | 0 | 0 | Study of RSV-induced beta-agonist insensitivity in mice; no dimercaprol and no PK parameters. |
| popPK | Van_2008 | irrelevant | 0 | 0 | In-vitro antiviral potency study of CD4 mimetic miniproteins; no dimercaprol or PK parameters involved. |
| popPK | Wei_2015 | irrelevant | 0 | 0 | This is a PK/PD Monte Carlo simulation for antibiotics (minocycline, tigecycline, moxifloxacin, levofloxacin); dimercaprol is not involved at all. |
| popPK | Wisniewski_2018 | irrelevant | 0 | 0 | Immunology study of Th1 signatures in pediatric severe asthma; no pharmacokinetic parameters for dimercaprol or any drug. |
| popPK | Yapa_2013 | irrelevant | 0 | 0 | This is a population PK study of colistin/CMS in rats, not dimercaprol; dimercaprol is not mentioned. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is an antiviral efficacy study of Lianhuaqingwen with oseltamivir/baloxavir; dimercaprol is not involved and no PK parameters are reported. |
| popPK | Zhao_2003 | irrelevant | 0 | 0 | Study of M. vaccae in asthmatic guinea pigs with no dimercaprol PK parameters. |
| popPK | Zhao_2007 | irrelevant | 0 | 0 | This is a vascular pharmacology study of PDE inhibitors in rat aortic rings with no dimercaprol PK data. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | This is a forest height-diameter allometry study with no pharmacokinetic data for dimercaprol or any drug. |
| popPK | Zhou_2023 | irrelevant | 0 | 0 | This is a forestry mixed-effects height-to-crown-base model for moso bamboo, with no pharmacokinetic data or dimercaprol content whatsoever. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
