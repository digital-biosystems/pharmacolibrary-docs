<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07B&quot;,&quot;href&quot;:&quot;atc/A07B.md&quot;},{&quot;label&quot;:&quot;crospovidone&quot;}]"></div>

# crospovidone

- **generic name:** crospovidone
- **ATC codes:** `A07BC03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 18:45 | 3:26 | 0/0/0 | 0/0/0 | 0/0/0 | 118,880/3,126 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 5/5 | 7/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 48 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belayneh_2020 | irrelevant | 0 | 0 | The paper is a formulation study where crospovidone is used as an excipient (superdisintegrant), not as the subject drug for pharmacokinetic analysis. |
| popPK | Cho_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dapagliflozin, where crospovidone is merely an excipient in the tablet formulation. |
| popPK | Chowhan_1986 | irrelevant | 0 | 0 | The study focuses on in vitro dissolution and drug-excipient interactions where crospovidone is an excipient, not a subject drug with pharmacokinetic parameters. |
| popPK | De_2012 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro dissolution of Furosemide using Crospovidone as a carrier, not on the pharmacokinetics of Crospovidone itself. |
| popPK | Desai_2012 | irrelevant | 0 | 0 | The study investigates the physical mechanism of disintegration (pharmaceutics) using video imaging, not the pharmacokinetics of crospovidone. |
| popPK | Firmansyah_2026 | irrelevant | 0 | 0 | The paper is a molecular dynamics simulation study of α-mangostin in amorphous solid dispersions and does not report pharmacokinetic parameters for crospovidone. |
| popPK | Frömming_1981 | irrelevant | 0 | 0 | The study investigates the sorption properties of crospovidone (an excipient) binding to other drugs, not the pharmacokinetics of crospovidone itself. |
| popPK | García-Arieta_2001 | irrelevant | 0 | 0 | Crospovidone is used as an excipient/vehicle for cyanocobalamin, not as the subject drug for pharmacokinetic analysis. |
| popPK | Ghumman_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of clomipramine, using crospovidone only as an excipient (disintegrant). |
| popPK | González-Álvarez_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of silodosin, with crospovidone serving only as a disintegrant excipient, not the subject drug. |
| popPK | Gordon_1993 | irrelevant | 0 | 0 | The study investigates the effect of crospovidone as a tablet disintegrant on dissolution rates, not the pharmacokinetics of crospovidone itself. |
| popPK | HECHT_1955 | irrelevant | 0 | 0 | no_text gate: only 42 chars of text extracted (&lt; 400) |
| popPK | Hanif_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dexibuprofen, where crospovidone is used only as an excipient (super-disintegrant) and not as the subject drug. |
| popPK | Horn_1982 | irrelevant | 0 | 0 | The study is an in-vitro chromatographic analysis of drug-polymer interactions where crospovidone is used as a stationary phase, not a pharmacokinetic study of crospovidone as a subject drug. |
| popPK | Hu_2013 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of berberine hydrochloride, with crospovidone serving only as an excipient in the tablet formulation. |
| popPK | Jagadish_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of raloxifene hydrochloride, using crospovidone only as an excipient (superdisintegrant) to enhance dissolution, not as the subject drug. |
| popPK | Jain_2010 | irrelevant | 0 | 0 | The paper is a review of crospovidone as a pharmaceutical excipient (spheronization aid) and contains no pharmacokinetic data. |
| PGx | Jing_2016 | not_relevant | 0 | 0 | The paper reports formulation effects on felodipine bioavailability, not pharmacogenomic effects on crospovidone. |
| popPK | Johnson_1991 | irrelevant | 0 | 0 | The study is an in-vitro formulation/dissolution study where crospovidone is used as a disintegrant excipient, not as the subject drug for pharmacokinetic analysis. |
| popPK | Kapse_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tamoxifen, not crospovidone. |
| popPK | Karamchandani_2021 | irrelevant | 0 | 0 | The paper is a histopathology review discussing crospovidone as a pharmaceutical filler/foreign material in GI specimens, not a pharmacokinetic study. |
| popPK | Kashiwagura_2023 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of coenzyme Q10 (CoQ10), where crospovidone is used only as an excipient (disintegrant) in the tablet formulation. |
| popPK | Khattab_1993 | irrelevant | 0 | 0 | The study investigates the effect of crospovidone as a disintegrant on tablet dissolution and disintegration, not its pharmacokinetics. |
| popPK | Kim_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pregabalin, with crospovidone serving only as an excipient in the tablet formulation. |
| popPK | Kim_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of solifenacin succinate, with crospovidone serving only as an excipient (disintegrant). |
| popPK | Lee_2025 | irrelevant | 0 | 0 | Crospovidone is listed only as an excipient in the formulation of the drug GS-441524, not as the subject of pharmacokinetic analysis. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Salvianolic acid B, not crospovidone. |
| popPK | Marshall_1991 | irrelevant | 0 | 0 | The paper is a physicochemical stability study of tablet disintegrants (crospovidone) and does not report any pharmacokinetic parameters. |
| popPK | Musuc_2021 | irrelevant | 0 | 0 | The study focuses on the formulation and release kinetics of carbamazepine, where crospovidone is merely an excipient component, not the subject drug. |
| PD | Musuc_2021 | not_relevant | 0 | 0 | The paper focuses on in vitro dissolution and release kinetics modeling (Higuchi/Peppas) of carbamazepine, not on pharmacodynamic or exposure-response relationships for crospovidone. |
| popPK | Naji_2023 | irrelevant | 0 | 0 | The study is an in vitro formulation development of Acrivastine tablets where crospovidone is used as an excipient (superdisintegrant), not as the subject drug for pharmacokinetic analysis. |
| popPK | Quodbach_2014 | irrelevant | 0 | 0 | The study investigates the physical disintegration mechanisms of crospovidone tablets in vitro, not its pharmacokinetic disposition parameters. |
| PD | Quodbach_2014 | not_relevant | 0 | 0 | The paper analyzes the physical disintegration kinetics of tablets (water uptake and force) using a modified Hill equation, which is a physicochemical process analysis, not a pharmacodynamic (drug effect) or exposure-response relationship. |
| popPK | ROST_1955 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| popPK | Rojewska_2017 | irrelevant | 0 | 0 | The study investigates the wettability and swelling of polymers (including Kollidon VA 64, a crospovidone derivative) in vitro, not the pharmacokinetics of crospovidone as a drug. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipients in pediatric populations and does not report pharmacokinetic parameters for crospovidone. |
| PD | Rouaz_2021 | not_relevant | 0 | 0 | The paper is a review of excipient safety and formulation technologies (ODT, 3D printing) in pediatrics and does not report any pharmacodynamic or exposure-response data for crospovidone. |
| popPK | Samara_2026 | irrelevant | 0 | 0 | The study focuses on the formulation of dimenhydrinate tablets where crospovidone is used as an excipient (disintegrant), not as the subject drug for pharmacokinetic analysis. |
| popPK | Schiermeier_2002 | irrelevant | 0 | 0 | The study is a pharmaceutical formulation investigation of ibuprofen tablets where crospovidone is used as an excipient, not a pharmacokinetic study of crospovidone. |
| popPK | Schlauersbach_2021 | irrelevant | 0 | 0 | The study investigates the effect of polymers on the solubilization of other drugs (Perphenazine, Imatinib, Metoprolol) in bile and does not report pharmacokinetic parameters for crospovidone. |
| popPK | Seo_2019 | irrelevant | 0 | 0 | Crospovidone is used as an excipient (disintegrant) in the formulation, not as the subject drug for pharmacokinetic analysis. |
| popPK | Torrado-Durán_1995 | irrelevant | 0 | 0 | The paper is a pharmaceutical formulation study on tableting characteristics of paracetamol particles, where crospovidone is used only as an excipient, and no pharmacokinetic parameters are reported. |
| popPK | Touzet_2020 | irrelevant | 0 | 0 | The paper is a formulation study for ketoconazole nanocrystals where crospovidone is used only as an excipient, and no pharmacokinetic parameters are reported. |
| popPK | Van_1987 | irrelevant | 0 | 0 | The paper is a pharmaceutical formulation study evaluating crospovidone as a disintegrant in tablets, not a pharmacokinetic study of crospovidone itself. |
| popPK | Veronica_2024 | irrelevant | 0 | 0 | The study investigates crospovidone as a tablet disintegrant (excipient) in a formulation context, not as a subject drug for pharmacokinetic analysis. |
| popPK | Voinovich_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Silybum marianum extract components (silybin, silychristin) where crospovidone is used only as an excipient to enhance solubility, not as the subject drug. |
| popPK | Yu_2015 | irrelevant | 0 | 0 | The paper describes the formulation and characterization of betulinic acid solid dispersions using PVP (a polymer excipient), not the pharmacokinetics of crospovidone. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a pharmaceutical formulation study on chlortetracycline solid dispersions using povidone (crospovidone) as a carrier, not a pharmacokinetic study of crospovidone itself. |
| popPK | van_1983 | irrelevant | 0 | 0 | The paper is a pharmaceutical formulation study focusing on tablet disintegration and dissolution properties, not a pharmacokinetic study of crospovidone. |
| popPK | Šagud_2018 | irrelevant | 0 | 0 | The paper focuses on the identification of degradation products of praziquantel during mechanochemical activation with crospovidone, not on the pharmacokinetics of crospovidone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
