<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;etacrynic acid&quot;}]"></div>

# etacrynic acid

- **generic name:** etacrynic acid
- **ATC codes:** `C03CC01`
- **DrugBank:** [DB00903](https://go.drugbank.com/drugs/DB00903) · **PubChem:** [CID 3278](https://pubchem.ncbi.nlm.nih.gov/compound/3278)
- **molar mass:** 303.138 g/mol (C13H12Cl2O4) — DrugBank
- **groups:** approved, investigational

## About

Ethacrynic acid is a loop diuretic used to treat fluid retention and swelling caused by conditions such as congestive heart failure, pulmonary edema, nephrotic syndrome, liver cirrhosis, and arterial hypertension. It is an approved drug, though it is now used far less often than other loop diuretics, mainly when they cannot be used because of sulfa allergy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418571](https://www.wikidata.org/wiki/Q418571) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 08:00 | 3:33 | 0/0/0 | 0/0/0 | 0/0/0 | 11,030/837 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etacrynic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `GSTP1` inhibitor | DrugBank actor |
| metabolism | lung | `GSTP1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor), GSTA2 (inhibitor), LEF1 (unknown), SLC12A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 78 matched, 62 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lacreta_1994.pdf` | Lacreta FP et al., Pharmakokinetics and bioavailability st…, The Journal of pharmacology… (1994) | popPK | 10 | not captured | [7932170](https://pubmed.ncbi.nlm.nih.gov/7932170) | The study reports quantitative pharmacokinetic parameters (clearance, half-life, bioavailability) for ethacrynic acid in humans, with specific numeric values provided in the text. |
| `Emmons_1999.pdf` | Emmons C, Transport characteristics of the apical…, The American journal of phy… (1999) | pd | 5 | [10.1152/ajprenal.1999.276.4.F635](https://doi.org/10.1152/ajprenal.1999.276.4.F635) | [10198425](https://www.ncbi.nlm.nih.gov/pubmed/10198425) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T08:00:21.901358+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aranda_1980 | irrelevant | 0 | 0 | The paper is a review discussing neonatal pharmacokinetics generally and mentions ethacrynic acid (likely a typo for etacrynic acid) only as a drug for which studies should be done, without providing any quantitative PK parameters. |
| popPK | Beutler_1992 | irrelevant | 0 | 0 | The study measures lithium clearance as a probe for renal physiology, not the pharmacokinetic parameters (CL, V, t1/2) of ethacrynic acid itself. |
| popPK | Brooks_1980 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of indacrinone, and etacrynic acid is only mentioned as a comparator for saluretic activity without any PK parameters reported. |
| popPK | Brooks_1984 | irrelevant | 1 | 0 | The study focuses on renal physiology and diuretic efficacy (fractional excretion) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for etacrynic acid. |
| popPK | Chenderovitch_1975 | irrelevant | 2 | 0 | The study focuses on the mechanism of choleresis (bile flow) in rats and reports biliary excretion rates rather than standard systemic pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Corbett_1981 | irrelevant | 0 | 0 | The study focuses on the renal clearance of bile acids, with ethacrynic acid (likely a typo for etacrynic acid) serving only as a co-administered agent to test competition, not as the subject of PK parameter estimation. |
| popPK | Czekalski_1974 | irrelevant | 0 | 0 | The study focuses on renal physiology and cAMP excretion, using ethacrynic acid (likely a typo for etacrynic acid or a different diuretic) only as a tool for distal blockade, without reporting any pharmacokinetic parameters for the drug itself. |
| popPK | Dai_2006 | irrelevant | 0 | 0 | The study focuses on the uptake of gentamicin in the inner ear, and etacrynic acid is only mentioned as a co-administered agent to modify uptake, with no PK parameters reported for etacrynic acid. |
| PD | Emmons_1999 | not_relevant | 0 | 0 | The paper focuses on the transport characteristics of an anion exchanger in rabbit cells and does not report any pharmacodynamic or exposure-response data for etacrynic acid. |
| popPK | Federspil_1976 | irrelevant | 0 | 0 | The paper focuses on the ototoxicity of aminoglycoside antibiotics, and etacrynic acid is only mentioned as a co-administered agent in the context of ototoxicity assessment, not as the subject of a pharmacokinetic study. |
| popPK | Gallagher_2001 | irrelevant | 0 | 0 | The study is an in-vivo toxicology/ecology paper using ethacrynic acid (a diuretic, distinct from etacrynic acid) as a GST substrate to measure enzyme activity, not a pharmacokinetic study of etacrynic acid. |
| popPK | Gao_1996 | irrelevant | 0 | 0 | The study investigates the mechanism of loop diuretics on macromolecule clearance in oral mucosa, not the pharmacokinetic disposition parameters (CL, V, etc.) of etacrynic acid. |
| popPK | Gibbs_1996 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of busulfan, with etacrynic acid serving only as an inhibitor, and no pharmacokinetic parameters for etacrynic acid are reported. |
| popPK | Giebisch_1973 | irrelevant | 0 | 0 | The study is a renal physiology experiment using ethacrynic acid as a diuretic agent to modulate tubular transport, not a pharmacokinetic study reporting disposition parameters for the drug. |
| popPK | Greven_1977 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of etozolin in rats, and etacrynic acid is only mentioned as a comparator for mechanism of action, with no PK parameters reported. |
| popPK | Hulter_1984 | irrelevant | 0 | 0 | The study focuses on renal acid-base physiology in dogs where ethacrynic acid is used only as a tool to induce volume depletion, not as the subject of pharmacokinetic analysis. |
| popPK | Humes_1999 | irrelevant | 0 | 0 | The paper is a mechanistic review of ototoxicity and nephrotoxicity that discusses etacrynic acid only as a class example without reporting any quantitative pharmacokinetic parameters. |
| popPK | Johanson_1992 | irrelevant | 2 | 0 | The study focuses on ion transport and distribution dynamics in the CNS rather than standard pharmacokinetic parameters (CL, V, ka) for etacrynic acid, and no numeric PK values are provided. |
| popPK | Kahn_1975 | irrelevant | 0 | 0 | The study investigates renal tubular electrolyte transport and diuretic effects, not the pharmacokinetic disposition parameters (CL, V, etc.) of etacrynic acid. |
| PD | Karaytuğ_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data (IC50/Ki) for piperazine derivatives and only mentions etacrynic acid as a standard comparator without providing its specific numeric PD parameters or an exposure-response relationship. |
| popPK | Knudson_2013 | irrelevant | 0 | 0 | The study focuses on potassium chloride supplementation and only mentions ethacrynic acid as a concomitant medication affecting potassium response, without reporting any pharmacokinetic parameters for etacrynic acid. |
| popPK | Laffi_1993 | irrelevant | 0 | 0 | The paper is a review of diuretic therapy in liver cirrhosis and does not report quantitative pharmacokinetic parameters for etacrynic acid. |
| popPK | Lautermann_1995 | irrelevant | 0 | 0 | The study focuses on ototoxicity and explicitly states that drug pharmacokinetics were not the basis for the findings, providing no quantitative PK parameters for etacrynic acid. |
| popPK | Law_1977 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of chloride ion distribution in rat renal slices where ethacrynic acid is used only as a comparator diuretic, not as the subject of pharmacokinetic analysis. |
| popPK | Levin_1976 | irrelevant | 0 | 0 | The study investigates the renal physiological effects of ethacrynic acid (a different drug) on sodium reabsorption in dogs, rather than reporting pharmacokinetic disposition parameters for etacrynic acid. |
| popPK | Lim_1988 | irrelevant | 0 | 0 | The study is an in-vitro equilibrium dialysis experiment measuring thyroid hormone binding displacement, not a pharmacokinetic study reporting disposition parameters for etacrynic acid. |
| popPK | McNabb_1984 | irrelevant | 0 | 0 | The study focuses on renal physiology and diuretic efficacy (clearance of solutes/water) rather than the pharmacokinetic disposition parameters (CL, V, t1/2) of etacrynic acid. |
| popPK | Miyanoshita_1989 | irrelevant | 0 | 0 | The study investigates the mechanism of action (PGE2 production) of loop diuretics in nephron segments and does not report pharmacokinetic parameters for etacrynic acid. |
| popPK | Moffett_2021 | irrelevant | 0 | 0 | The study focuses on acetazolamide-associated acute kidney injury and only mentions ethacrynic acid as a risk factor, providing no pharmacokinetic parameters for etacrynic acid. |
| popPK | Mudge_1975 | irrelevant | 0 | 0 | The study focuses on renal physiology and electrolyte excretion mechanisms in dogs, not on the pharmacokinetic disposition parameters (CL, V, etc.) of etacrynic acid. |
| popPK | Nguyen_2020 | irrelevant | 0 | 0 | The paper is a clinical review focusing on furosemide and torsemide, with no quantitative pharmacokinetic data for etacrynic acid. |
| popPK | ODwyer_1991 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of thiotepa, with ethacrynic acid serving only as a co-administered inhibitor without reported PK parameters. |
| popPK | Pieragnoli_1976 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| popPK | Potęga_2021 | irrelevant | 0 | 0 | The paper studies the drug C-2028, not etacrynic acid, and etacrynic acid is only mentioned as an inactivating agent in an in-vitro experiment. |
| popPK | Puschett_1981 | irrelevant | 0 | 0 | The paper is a review of diuretic mechanisms of action and does not report quantitative pharmacokinetic parameters for etacrynic acid. |
| popPK | Radó_1973 | irrelevant | 0 | 0 | no_text gate: only 157 chars of text extracted (&lt; 400) |
| popPK | Röckel_1977 | irrelevant | 0 | 0 | The study focuses on the diuretic efficacy of Bay g 2821, with ethacrynic acid mentioned only as a comparator for efficacy, and no pharmacokinetic parameters for etacrynic acid are reported. |
| popPK | Sadowski_1981 | irrelevant | 0 | 0 | The study investigates renal physiology (proximal transport) in dogs using ethacrynic acid as a diuretic tool, not as the subject of a pharmacokinetic analysis. |
| popPK | Scalais_1984 | irrelevant | 1 | 0 | The study reports pharmacodynamic effects (electrolyte excretion) rather than quantitative pharmacokinetic parameters (CL, V, ka) for ethacrynic acid. |
| popPK | Schwartz_1986 | irrelevant | 2 | 1 | The paper is a general review of diuretics that mentions ethacrynic acid (likely a typo for etacrynic acid) only to state a qualitative half-life (&lt;1 hour) without providing quantitative PK parameters like clearance or volume. |
| popPK | Shelton_2020 | irrelevant | 0 | 0 | The study is a mechanistic investigation of renal lymphatic vessel dynamics using pressure myography, not a pharmacokinetic study, and etacrynic acid is used only as a comparator agent with no PK parameters reported. |
| popPK | Simonsen_2020 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of benoxacor, and etacrynic acid is only mentioned as a GST inhibitor, not as the subject drug for PK parameter estimation. |
| popPK | Stockigt_1985 | irrelevant | 0 | 0 | The study focuses on furosemide's interaction with thyroid hormone binding sites, and etacrynic acid is only mentioned as a comparator in an in-vitro binding assay without any pharmacokinetic parameters. |
| popPK | Stribrná_1975 | irrelevant | 0 | 0 | The study focuses on renal physiology (urea clearance) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for ethacrynic acid. |
| popPK | Szabó_1979 | irrelevant | 0 | 0 | The study examines the effect of etacrynic acid on lymph flow and hemodynamics in dogs, not its pharmacokinetic disposition parameters. |
| popPK | Tamhane_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ON 01210.Na, using etacrynic acid only as a co-administered inhibitor/comparator, and does not report PK parameters for etacrynic acid itself. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | The paper is a chemoproteomic study analyzing covalent drug-target interactions (cysteine reactivity) and does not report any pharmacokinetic parameters for etacrynic acid. |
| PD | Tian_2025 | not_relevant | 0 | 0 | The paper focuses on proteome-wide cysteine ligandability and targeted protein degradation mechanisms, reporting no pharmacokinetic or pharmacodynamic exposure-response models or numeric PD parameters for etacrynic acid. |
| popPK | Valdez_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay for cellular efflux inhibition and does not report quantitative pharmacokinetic parameters for etacrynic acid. |
| popPK | Wallin_1978 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| popPK | Wang_2026 | irrelevant | 0 | 0 | Etacrynic acid is used only as a GST inhibitor to validate the mechanism of action for HuaiHua San, and no pharmacokinetic parameters for etacrynic acid are reported. |
| popPK | Wargo_2009 | irrelevant | 1 | 0 | The paper is a review of loop diuretics that does not report original quantitative pharmacokinetic parameters for etacrynic acid. |
| popPK | Whittembury_1975 | irrelevant | 0 | 0 | The study investigates renal tubular transport mechanisms in Necturus using ethacrynic acid as a pharmacological inhibitor, not its pharmacokinetic disposition parameters. |
| popPK | Williams_1982 | irrelevant | 0 | 0 | The study focuses on hydrochlorothiazide pharmacokinetics, and etacrynic acid is only mentioned as a comparator in the introduction without any reported PK parameters. |
| popPK | Wise_2018 | irrelevant | 0 | 0 | The study focuses on the efficacy of metolazone in infants, and etacrynic acid is only mentioned as a co-administered diuretic without any pharmacokinetic parameter reporting. |
| popPK | Woster_1990 | irrelevant | 0 | 0 | The paper is a clinical review of intracranial pressure management that mentions ethacrynic acid only as a therapeutic agent, without reporting any pharmacokinetic parameters. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of a CSNK2A inhibitor (2h), and etacrynic acid is used only as a co-administered GST inhibitor to improve exposure, not as the subject drug for PK parameter extraction. |
| PD | unknown_2020 | not_relevant | 0 | 0 | The provided text is a title or heading ("Drugs for hypertension") and contains no data, analysis, or mention of etacrynic acid or any pharmacodynamic parameters. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a title or heading ("Drugs for hypertension") and contains no data, analysis, or mention of etacrynic acid or any pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
